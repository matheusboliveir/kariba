import { Scene } from 'phaser';

export class Preloader extends Scene {
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        // Carregamos esta imagem na nossa Cena de Boot, então podemos exibi-la aqui
        this.add.image(512, 384, 'background');

        // Uma barra de progresso simples. Este é o contorno da barra.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        // Esta é a barra de progresso em si. Ela aumentará de tamanho da esquerda para a direita com base na % de progresso.
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        // Use o evento 'progress' emitido pelo LoaderPlugin para atualizar a barra de carregamento
        this.load.on('progress', (progress: number) => {

            // Atualize a barra de progresso (nossa barra tem 464px de largura, então 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload ()
    {
        // Carregue os recursos do jogo - Substitua pelos seus próprios recursos
        this.load.setPath('assets');

        this.load.image('logo', 'logo.png');
    }

    create ()
    {
        // Quando todos os recursos forem carregados, geralmente vale a pena criar objetos globais aqui que o restante do jogo pode usar.
        // Por exemplo, você pode definir animações globais aqui, para que possamos usá-las em outras cenas.

        // Vá para o MainMenu. Você também pode trocar isso por uma Transição de Cena, como um fade da câmera.
        this.scene.start('MainMenu');
    }
}
