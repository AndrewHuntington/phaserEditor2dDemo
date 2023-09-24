// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface PlatformPrefab {
  body: Phaser.Physics.Arcade.StaticBody;
}

export default class PlatformPrefab extends Phaser.Physics.Arcade.Image {
  constructor(
    scene: Phaser.Scene,
    x?: number,
    y?: number,
    texture?: string,
    frame?: number | string
  ) {
    super(scene, x ?? 428, y ?? 291, texture || "platform", frame);

    this.tintFill = true;
    this.tintTopLeft = 3112490;
    this.tintTopRight = 3112490;
    this.tintBottomLeft = 3424045;
    this.tintBottomRight = 3424045;
    scene.physics.add.existing(this, true);
    this.body.setSize(400, 32, false);

    /* START-USER-CTR-CODE */
    this.scene.events.once("scene-awake", () => {
      this.refreshBody();
    });
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
