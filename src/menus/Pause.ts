import { Scene, GameObjects } from 'phaser';

export class Pause extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('Pause');
    }

    create ()
    {
			const menu = this.add.container(600,100);
			const background = this.add.rectangle(0, 0, 150, 100, 0x000000, 0.5).setOrigin(0).setStrokeStyle(2, 0xffffff).setInteractive();

			const botao = this.add.text(10, 10, 'opção', {
				fontFamily: 'Arial Black',
				fontSize: 20, color: '#ffffff',
				stroke: '#000000',
				strokeThickness: 8
			}).setOrigin(0).setInteractive();
			const botao2 = this.add.text(10, 40, 'opção', {
				fontFamily: 'Arial Black',
				fontSize: 20, color: '#ffffff',
				stroke: '#000000', strokeThickness: 8
			}).setOrigin(0).setInteractive();

			menu.add([background, botao, botao2]);

			menu.setDepth(10);

			const overlay = this.add.rectangle(0, 0, this.scale.width, this.scale.height, 0x000000, 0).setOrigin(0).setInteractive();

			overlay.setDepth(9);

			overlay.on('pointerdown', () => {
				this.scene.stop(); 
			});
			background.on('pointerdown', (pointer: Event) => {
				pointer.stopPropagation();
			});
    }
}
