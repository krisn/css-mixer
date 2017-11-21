/**
 * css-mixer
 *
 * Copyright © 2018 Kris Nyunt. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

class CSSMixer {

  constructor(name) {
    this.name = name || 'Guest';
  }

  hello() {
    return `Welcome, ${this.name}!`;
  }

}

export default CSSMixer;
