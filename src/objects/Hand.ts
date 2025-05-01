import Phaser from 'phaser';
import { Card } from './Card';

export class Hand {
  scene: Phaser.Scene;
  cards: Card[] = [];

  constructor(scene: Phaser.Scene) {
    this.scene = scene;

    // ouvir evento de carta comprada
    this.scene.events.on('cardDrawn', this.addCard, this);
  }

  addCard(card: Card) {
    this.cards.push(card);
    this.layoutCards();
  }

  layoutCards() {
    const spacing = 100;
    const startX = 400 - (this.cards.length * spacing) / 2;
    const y = 500;

    this.cards.forEach((card, i) => {
      card.setPosition(startX + i * spacing, y);
    });
  }
}
