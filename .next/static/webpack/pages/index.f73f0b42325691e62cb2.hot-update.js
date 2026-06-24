self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hobbies": function() { return /* binding */ hobbies; },
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var hobbies = [{
  title: 'Klasik Müzik & Keman Pratikleri',
  description: "Keman pratikleri, bana bir mühendis olarak odaklanma süresini (deep work) uzatmayı ve kas hafızası ile zihinsel koordinasyon arasındaki senkronizasyonu yönetmeyi öğretti. Metodik çalışma, uzun vadeli sabır ve işitsel analitik algı gibi kritik mühendislik ve adaptasyon becerilerimi doğrudan besliyor.",
  image: '/images/keman.webp',
  id: 0
}, {
  title: 'Satranç & Strateji Simülasyonları',
  description: "Satranç ve turnuva süreçleri; dinamik karar alma, oyun teorisi ve kriz anlarında soğukkanlı kalabilme yetilerimi en üst duyaya çıkardı. ELO ve UKD rating takipleriyle analitik olarak beslediğim bu hobi, bana hamle yapmadan 5 adım sonrasını planlama felsefesini aşıladı.",
  image: '/images/santranc.webp',
  id: 1
}, {
  title: 'Entelektüel Münazara & Podcast Analizleri',
  description: "Belirli bir konuyu ele alıp etraflıca argümantasyon üretmek ve kendi oluşturduğum fikir eksenlerinde konuşmak; bana hitabet, hızlı sentezleme ve çürütme disiplini kazandırdı. Karabük'ü temsil ettiğim kürsülerden dijital ortama aktardığım bu birikim; kriz yönetimini ve analitik düşünceyi geliştirmenin en efektif yolu.",
  image: '/images/munazara.webp',
  id: 2
}, {
  title: 'Sürüş Tutkusu & Bağımsızlık Azmi',
  description: "Tamamen kendi biriktirdiğim bütçeyle, kimseden destek almadan ve gizlilikle yürüterek kazandığım ehliyet ve Kuba Superlight 200 cruiser motosikletim. Bu süreç benim için sadece bir sürüş tutkusu değil; odaklanma, azim ve finansal disiplinin somut bir zaferidir. Mekanik ve yol geometrisi analizleriyle harmanladığım bu hobiyi aktif olarak sürdürüyorum.",
  image: '/images/motor.webp',
  id: 3
}];
var projects = [{
  title: 'TROMPET',
  intro: '2D Strategic Card Game (Unity Engine)',
  description: "Unity motoru üzerinde C# ile geliştirilen, yüksek yoğunluklu bir strateji ve oyun teorisi simülasyonu. Proje, dinamik kart mekaniklerini ve oyuncu kararlarını yönetmek için optimize edilmiş bir Durum Makinesi (State Machine) mimarisi üzerine kurulmuştur. Kartların birbiriyle olan karmaşık etkileşimleri, olasılık hesaplamaları ve dinamik animasyon kuyrukları tamamen asenkron veri yapılarıyla yönetilmektedir.",
  image: '/images/trompet.webp',
  tags: ['Unity', 'C#', 'Game Dev'],
  source: '#',
  visit: '#',
  id: 0
}, {
  title: 'DİSİPLİN',
  intro: 'Personal Productivity Ecosystem',
  description: "Kişisel zaman yönetimini ve odaklanma disiplini optimize etmek amacıyla geliştirilmiş, Next.js ve Tailwind CSS tabanlı bir modern web uygulaması. Arka planda, kullanıcı alışkanlıklarını ve rutin verimlilik grafiklerini analiz eden, Prompt Engineering ve yapay zeka ajanı (AI Agent) mimarileriyle entegre bir veri işleme modeli barındırır. Bilişsel yükü azaltmayı hedefleyen, performans odaklı ve minimalist bir verimlilik ekosistemidir.",
  image: '/images/disiplin.webp',
  tags: ['Next.js', 'Tailwind CSS', 'AI'],
  source: '#',
  visit: '#',
  id: 1
}];
var TimeLineData = [{
  year: 2008,
  text: 'KTU Elk. Elk. Muh mezun oldum'
}, {
  year: 2009,
  text: 'Türk Telekom Uzman yardımcısı olarak işe başladım'
}, {
  year: 2013,
  text: 'Türk Telekom DC Enerji Uzmanı'
}, {
  year: 2016,
  text: 'Türk Telekom DC Enerji Yönetici'
}, {
  year: 2017,
  text: 'Türk Telekom ESS Müdürü'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiaG9iYmllcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImlkIiwicHJvamVjdHMiLCJpbnRybyIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsT0FBTyxHQUFHLENBQ3JCO0FBQ0VDLE9BQUssRUFBRSxpQ0FEVDtBQUVFQyxhQUFXLEVBQUUsOFNBRmY7QUFHRUMsT0FBSyxFQUFFLG9CQUhUO0FBSUVDLElBQUUsRUFBRTtBQUpOLENBRHFCLEVBT3JCO0FBQ0VILE9BQUssRUFBRSxtQ0FEVDtBQUVFQyxhQUFXLEVBQUUsK1FBRmY7QUFHRUMsT0FBSyxFQUFFLHVCQUhUO0FBSUVDLElBQUUsRUFBRTtBQUpOLENBUHFCLEVBYXJCO0FBQ0VILE9BQUssRUFBRSwyQ0FEVDtBQUVFQyxhQUFXLEVBQUUsZ1VBRmY7QUFHRUMsT0FBSyxFQUFFLHVCQUhUO0FBSUVDLElBQUUsRUFBRTtBQUpOLENBYnFCLEVBbUJyQjtBQUNFSCxPQUFLLEVBQUUsa0NBRFQ7QUFFRUMsYUFBVyxFQUFFLGtXQUZmO0FBR0VDLE9BQUssRUFBRSxvQkFIVDtBQUlFQyxJQUFFLEVBQUU7QUFKTixDQW5CcUIsQ0FBaEI7QUEyQkEsSUFBTUMsUUFBUSxHQUFHLENBQ3RCO0FBQ0VKLE9BQUssRUFBRSxTQURUO0FBRUVLLE9BQUssRUFBRSx1Q0FGVDtBQUdFSixhQUFXLEVBQUUsNFpBSGY7QUFJRUMsT0FBSyxFQUFFLHNCQUpUO0FBS0VJLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFVBQWhCLENBTFI7QUFNRUMsUUFBTSxFQUFFLEdBTlY7QUFPRUMsT0FBSyxFQUFFLEdBUFQ7QUFRRUwsSUFBRSxFQUFFO0FBUk4sQ0FEc0IsRUFXdEI7QUFDRUgsT0FBSyxFQUFFLFVBRFQ7QUFFRUssT0FBSyxFQUFFLGlDQUZUO0FBR0VKLGFBQVcsRUFBRSxzYkFIZjtBQUlFQyxPQUFLLEVBQUUsdUJBSlQ7QUFLRUksTUFBSSxFQUFFLENBQUMsU0FBRCxFQUFZLGNBQVosRUFBNEIsSUFBNUIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsR0FOVjtBQU9FQyxPQUFLLEVBQUUsR0FQVDtBQVFFTCxJQUFFLEVBQUU7QUFSTixDQVhzQixDQUFqQjtBQXVCQSxJQUFNTSxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNzNmMGI0MjMyNTY5MWU2MmNiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGhvYmJpZXMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0tsYXNpayBNw7x6aWsgJiBLZW1hbiBQcmF0aWtsZXJpJyxcbiAgICBkZXNjcmlwdGlvbjogXCJLZW1hbiBwcmF0aWtsZXJpLCBiYW5hIGJpciBtw7xoZW5kaXMgb2xhcmFrIG9kYWtsYW5tYSBzw7xyZXNpbmkgKGRlZXAgd29yaykgdXphdG1hecSxIHZlIGthcyBoYWbEsXphc8SxIGlsZSB6aWhpbnNlbCBrb29yZGluYXN5b24gYXJhc8SxbmRha2kgc2Vua3Jvbml6YXN5b251IHnDtm5ldG1leWkgw7bEn3JldHRpLiBNZXRvZGlrIMOnYWzEscWfbWEsIHV6dW4gdmFkZWxpIHNhYsSxciB2ZSBpxZ9pdHNlbCBhbmFsaXRpayBhbGfEsSBnaWJpIGtyaXRpayBtw7xoZW5kaXNsaWsgdmUgYWRhcHRhc3lvbiBiZWNlcmlsZXJpbWkgZG/En3J1ZGFuIGJlc2xpeW9yLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9rZW1hbi53ZWJwJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU2F0cmFuw6cgJiBTdHJhdGVqaSBTaW3DvGxhc3lvbmxhcsSxJyxcbiAgICBkZXNjcmlwdGlvbjogXCJTYXRyYW7DpyB2ZSB0dXJudXZhIHPDvHJlw6dsZXJpOyBkaW5hbWlrIGthcmFyIGFsbWEsIG95dW4gdGVvcmlzaSB2ZSBrcml6IGFubGFyxLFuZGEgc2/En3Vra2FubMSxIGthbGFiaWxtZSB5ZXRpbGVyaW1pIGVuIMO8c3QgZHV5YXlhIMOnxLFrYXJkxLEuIEVMTyB2ZSBVS0QgcmF0aW5nIHRha2lwbGVyaXlsZSBhbmFsaXRpayBvbGFyYWsgYmVzbGVkacSfaW0gYnUgaG9iaSwgYmFuYSBoYW1sZSB5YXBtYWRhbiA1IGFkxLFtIHNvbnJhc8SxbsSxIHBsYW5sYW1hIGZlbHNlZmVzaW5pIGHFn8SxbGFkxLEuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3NhbnRyYW5jLndlYnAnLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFbnRlbGVrdMO8ZWwgTcO8bmF6YXJhICYgUG9kY2FzdCBBbmFsaXpsZXJpJyxcbiAgICBkZXNjcmlwdGlvbjogXCJCZWxpcmxpIGJpciBrb251eXUgZWxlIGFsxLFwIGV0cmFmbMSxY2EgYXJnw7xtYW50YXN5b24gw7xyZXRtZWsgdmUga2VuZGkgb2x1xZ90dXJkdcSfdW0gZmlraXIgZWtzZW5sZXJpbmRlIGtvbnXFn21hazsgYmFuYSBoaXRhYmV0LCBoxLF6bMSxIHNlbnRlemxlbWUgdmUgw6fDvHLDvHRtZSBkaXNpcGxpbmkga2F6YW5kxLFyZMSxLiBLYXJhYsO8ayfDvCB0ZW1zaWwgZXR0acSfaW0ga8O8cnPDvGxlcmRlbiBkaWppdGFsIG9ydGFtYSBha3RhcmTEscSfxLFtIGJ1IGJpcmlraW07IGtyaXogecO2bmV0aW1pbmkgdmUgYW5hbGl0aWsgZMO8xZ/DvG5jZXlpIGdlbGnFn3Rpcm1lbmluIGVuIGVmZWt0aWYgeW9sdS5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvbXVuYXphcmEud2VicCcsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1PDvHLDvMWfIFR1dGt1c3UgJiBCYcSfxLFtc8SxemzEsWsgQXptaScsXG4gICAgZGVzY3JpcHRpb246IFwiVGFtYW1lbiBrZW5kaSBiaXJpa3RpcmRpxJ9pbSBiw7x0w6dleWxlLCBraW1zZWRlbiBkZXN0ZWsgYWxtYWRhbiB2ZSBnaXpsaWxpa2xlIHnDvHLDvHRlcmVrIGthemFuZMSxxJ/EsW0gZWhsaXlldCB2ZSBLdWJhIFN1cGVybGlnaHQgMjAwIGNydWlzZXIgbW90b3Npa2xldGltLiBCdSBzw7xyZcOnIGJlbmltIGnDp2luIHNhZGVjZSBiaXIgc8O8csO8xZ8gdHV0a3VzdSBkZcSfaWw7IG9kYWtsYW5tYSwgYXppbSB2ZSBmaW5hbnNhbCBkaXNpcGxpbmluIHNvbXV0IGJpciB6YWZlcmlkaXIuIE1la2FuaWsgdmUgeW9sIGdlb21ldHJpc2kgYW5hbGl6bGVyaXlsZSBoYXJtYW5sYWTEscSfxLFtIGJ1IGhvYml5aSBha3RpZiBvbGFyYWsgc8O8cmTDvHLDvHlvcnVtLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9tb3Rvci53ZWJwJyxcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnVFJPTVBFVCcsXG4gICAgaW50cm86ICcyRCBTdHJhdGVnaWMgQ2FyZCBHYW1lIChVbml0eSBFbmdpbmUpJyxcbiAgICBkZXNjcmlwdGlvbjogXCJVbml0eSBtb3RvcnUgw7x6ZXJpbmRlIEMjIGlsZSBnZWxpxZ90aXJpbGVuLCB5w7xrc2VrIHlvxJ91bmx1a2x1IGJpciBzdHJhdGVqaSB2ZSBveXVuIHRlb3Jpc2kgc2ltw7xsYXN5b251LiBQcm9qZSwgZGluYW1payBrYXJ0IG1la2FuaWtsZXJpbmkgdmUgb3l1bmN1IGthcmFybGFyxLFuxLEgecO2bmV0bWVrIGnDp2luIG9wdGltaXplIGVkaWxtacWfIGJpciBEdXJ1bSBNYWtpbmVzaSAoU3RhdGUgTWFjaGluZSkgbWltYXJpc2kgw7x6ZXJpbmUga3VydWxtdcWfdHVyLiBLYXJ0bGFyxLFuIGJpcmJpcml5bGUgb2xhbiBrYXJtYcWfxLFrIGV0a2lsZcWfaW1sZXJpLCBvbGFzxLFsxLFrIGhlc2FwbGFtYWxhcsSxIHZlIGRpbmFtaWsgYW5pbWFzeW9uIGt1eXJ1a2xhcsSxIHRhbWFtZW4gYXNlbmtyb24gdmVyaSB5YXDEsWxhcsSxeWxhIHnDtm5ldGlsbWVrdGVkaXIuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3Ryb21wZXQud2VicCcsXG4gICAgdGFnczogWydVbml0eScsICdDIycsICdHYW1lIERldiddLFxuICAgIHNvdXJjZTogJyMnLFxuICAgIHZpc2l0OiAnIycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0TEsFPEsFBMxLBOJyxcbiAgICBpbnRybzogJ1BlcnNvbmFsIFByb2R1Y3Rpdml0eSBFY29zeXN0ZW0nLFxuICAgIGRlc2NyaXB0aW9uOiBcIktpxZ9pc2VsIHphbWFuIHnDtm5ldGltaW5pIHZlIG9kYWtsYW5tYSBkaXNpcGxpbmkgb3B0aW1pemUgZXRtZWsgYW1hY8SxeWxhIGdlbGnFn3RpcmlsbWnFnywgTmV4dC5qcyB2ZSBUYWlsd2luZCBDU1MgdGFiYW5sxLEgYmlyIG1vZGVybiB3ZWIgdXlndWxhbWFzxLEuIEFya2EgcGxhbmRhLCBrdWxsYW7EsWPEsSBhbMSxxZ9rYW5sxLFrbGFyxLFuxLEgdmUgcnV0aW4gdmVyaW1saWxpayBncmFmaWtsZXJpbmkgYW5hbGl6IGVkZW4sIFByb21wdCBFbmdpbmVlcmluZyB2ZSB5YXBheSB6ZWthIGFqYW7EsSAoQUkgQWdlbnQpIG1pbWFyaWxlcml5bGUgZW50ZWdyZSBiaXIgdmVyaSBpxZ9sZW1lIG1vZGVsaSBiYXLEsW5kxLFyxLFyLiBCaWxpxZ9zZWwgecO8a8O8IGF6YWx0bWF5xLEgaGVkZWZsZXllbiwgcGVyZm9ybWFucyBvZGFrbMSxIHZlIG1pbmltYWxpc3QgYmlyIHZlcmltbGlsaWsgZWtvc2lzdGVtaWRpci5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvZGlzaXBsaW4ud2VicCcsXG4gICAgdGFnczogWydOZXh0LmpzJywgJ1RhaWx3aW5kIENTUycsICdBSSddLFxuICAgIHNvdXJjZTogJyMnLFxuICAgIHZpc2l0OiAnIycsXG4gICAgaWQ6IDEsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMDgsIHRleHQ6ICdLVFUgRWxrLiBFbGsuIE11aCBtZXp1biBvbGR1bScsIH0sXG4gIHsgeWVhcjogMjAwOSwgdGV4dDogJ1TDvHJrIFRlbGVrb20gVXptYW4geWFyZMSxbWPEsXPEsSBvbGFyYWsgacWfZSBiYcWfbGFkxLFtJywgfSxcbiAgeyB5ZWFyOiAyMDEzLCB0ZXh0OiAnVMO8cmsgVGVsZWtvbSBEQyBFbmVyamkgVXptYW7EsScsIH0sXG4gIHsgeWVhcjogMjAxNiwgdGV4dDogJ1TDvHJrIFRlbGVrb20gREMgRW5lcmppIFnDtm5ldGljaScsIH0sXG4gIHsgeWVhcjogMjAxNywgdGV4dDogJ1TDvHJrIFRlbGVrb20gRVNTIE3DvGTDvHLDvCcsIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=