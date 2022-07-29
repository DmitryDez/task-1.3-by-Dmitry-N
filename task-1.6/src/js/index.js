import '../scss/style.scss';

import {overlay, overlayHandler} from './overlay.js';
import {btnReadMore, readMoreHandler} from './readMoreHandler.js';

import {modalCall, btnCall, btnCloseOrderCallModal, toggleCallModal}
from './toggleOrderCallModal.js';

import {modalChat, btnChat, btnCloseFeedbackModal, toggleChatModal}
from './toggleFeedbackModal.js';

import {modalMenu, btnMenuM, btnMenuSM, btnCloseMenuModal, toggleMenuModal}
from './toggleMenuModal.js';

import {toggleBtnBrandsCards, brandsList, toggleBtnClickBrandsCards,
showBrandsCards, hideBrandsCards,
changeToggleBtnBrandsCards} from './toggleBrandCards.js';

import {toggleBtnRepairCards, repairCardsList, toggleBtnClickRepairCards,
showRepairCards, hideRepairCards,
changeToggleBtnRepairCards} from './toggleRepairCards.js';

import {swiperBrandsCardsMode} from './swiperBrandsCards.js';
import {swiperRepairCardsMode} from './swiperRepairCards.js';
import {swiperPricesCardsMode} from './swiperPricesCards.js';
