import Phaser from 'phaser';

export class Card extends Phaser.GameObjects.Image {

	private valor: string;

	constructor(scene: Phaser.Scene, x: number, y: number, textura: string, valor: string) {
		super(scene, x, y, textura);
		this.valor = valor;
		this.setInteractive({useHandCursor: true});
		this.setScale(0.5);
		
		scene.add.existing(this);

		//Eventos do card
		this.on('pointerover', () => {
			this.setScale(0.6);
		});

		this.on('pointerout', () => {
			this.setScale(0.5);
		});
	}
}