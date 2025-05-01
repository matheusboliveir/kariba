import Phaser from 'phaser';
import { Card } from './Card';

export class Deck {
  scene: Phaser.Scene;
  pilha: string[];
  x: number;
  y: number;
  sprite: Phaser.GameObjects.Image;

  constructor(scene: Phaser.Scene, x: number, y: number, textura: string, cards: string[]) {
    this.scene = scene;
    this.pilha = cards;
    this.x = x;
    this.y = y;

    this.sprite = scene.add.image(x, y, textura).setScale(0.5).setInteractive();
    this.sprite.on('pointerdown', this.desenharCard, this);
  }

  desenharCard() {
    if (this.pilha.length === 0) return;
    const value = this.pilha.pop()!;
    const card = new Card(this.scene, this.x, this.y, 'card-front', value);
    this.scene.events.emit('cardDrawn', card);
  }
}
