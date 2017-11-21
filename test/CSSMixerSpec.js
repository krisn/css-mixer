/**
 * css-mixer
 *
 * Copyright © 2016 Kris Nyunt. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import CSSMixer from '../src/CSSMixer';

describe('CSSMixer', () => {

  describe('cssmixer.hello()', () => {

    it('should return welcome message for a guest user', () => {
      const cssmixer = new CSSMixer();
      const message = cssmixer.hello();
      expect(message).to.be.equal('Welcome, Guest!');
    });

    it('should return welcome message for a named user', () => {
      const cssmixer = new CSSMixer('John');
      const message = cssmixer.hello();
      expect(message).to.be.equal('Welcome, John!');
    });

  });

});
