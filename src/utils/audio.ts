/**
 * Web Audio Ambient Lo-Fi Synthesizer & Audio Engine
 * Provides an offline, zero-asset, warm melodic ambient soundtrack.
 */

class AmbientSoundtrack {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private timerId: number | null = null;
  private customAudio: HTMLAudioElement | null = null;
  private customAudioUrl: string = "";
  private currentChordIndex: number = 0;

  // Gentle, warm chord progression: Dmaj9 -> Bm9 -> Gmaj9 -> A7sus4
  private chords = [
    [146.83, 220.00, 277.18, 369.99, 440.00], // D3, A3, C#4, F#4, A4
    [123.47, 185.00, 246.94, 293.66, 369.99], // B2, F#3, B3, D4, F#4
    [98.00, 146.83, 196.00, 293.66, 369.99],  // G2, D3, G3, D4, F#4
    [110.00, 164.81, 220.00, 293.66, 329.63], // A2, E3, A3, D4, E4
  ];

  constructor(customUrl?: string) {
    if (customUrl) {
      this.customAudioUrl = customUrl;
    }
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play() {
    if (this.isPlaying) return;

    if (this.customAudioUrl) {
      if (!this.customAudio) {
        this.customAudio = new Audio(this.customAudioUrl);
        this.customAudio.loop = true;
      }
      this.customAudio.muted = this.isMuted;
      this.customAudio.play().catch(console.error);
      this.isPlaying = true;
      return;
    }

    this.initContext();
    this.isPlaying = true;
    this.scheduleNextChord();
  }

  public pause() {
    this.isPlaying = false;
    if (this.customAudio) {
      this.customAudio.pause();
    }
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.customAudio) {
      this.customAudio.muted = this.isMuted;
    }
    return this.isMuted;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  private scheduleNextChord() {
    if (!this.isPlaying || !this.ctx) return;

    const notes = this.chords[this.currentChordIndex];
    this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;

    const now = this.ctx.currentTime;
    const duration = 4.2;

    if (!this.isMuted) {
      // Arpeggiate notes slightly for a human, tender touch
      notes.forEach((freq, idx) => {
        this.playPianoNote(freq, now + idx * 0.18, duration - idx * 0.15);
      });
    }

    // Schedule next chord
    this.timerId = window.setTimeout(() => {
      this.scheduleNextChord();
    }, 4000);
  }

  private playPianoNote(freq: number, startTime: number, duration: number) {
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Warm Rhodes/felt piano style sound
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);

    // Warm lowpass filter to remove harshness
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, startTime);
    filter.frequency.exponentialRampToValueAtTime(350, startTime + duration);

    // Gentle envelope: soft attack, sustained decay
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(0.045, startTime + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
  }
}

export const ambientSound = new AmbientSoundtrack();
