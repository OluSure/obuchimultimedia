/**
 * Axial
 * Axial Construct is a universal template for factories, industry, construction, architecture, factories, mechanics, energy
 * Exclusively on https://1.envato.market/axial-html
 *
 * @encoding        UTF-8
 * @version         2.0.0
 * @copyright       (C) 2018 - 2022 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lilith Lamber (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/
'use strict';

import {initFeedbackSlider, initHeroSlider} from './modules/slider';
import drawProcessSteps from "./modules/steps";
import initMap from './modules/map';

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initFeedbackSlider();
    drawProcessSteps();
    initMap('#map');
})
