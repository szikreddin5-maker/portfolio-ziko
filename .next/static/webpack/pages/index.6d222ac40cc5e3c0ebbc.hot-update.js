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
  image: '/images/keman.jpg',
  id: 0
}, {
  title: 'Satranç & Strateji Simülasyonları',
  description: "Satranç ve turnuva süreçleri; dinamik karar alma, oyun teorisi ve kriz anlarında soğukkanlı kalabilme yetilerimi en üst duyaya çıkardı. ELO ve UKD rating takipleriyle analitik olarak beslediğim bu hobi, bana hamle yapmadan 5 adım sonrasını planlama felsefesini aşıladı.",
  image: '/images/santranc.jpg',
  id: 1
}, {
  title: 'Entelektüel Münazara & Podcast Analizleri',
  description: "Belirli bir konuyu ele alıp etraflıca argümantasyon üretmek ve kendi oluşturduğum fikir eksenlerinde konuşmak; bana hitabet, hızlı sentezleme ve çürütme disiplini kazandırdı. Karabük'ü temsil ettiğim kürsülerden dijital ortama aktardığım bu birikim; kriz yönetimini ve analitik düşünceyi geliştirmenin en efektif yolu.",
  image: '/images/munazara.png',
  id: 2
}, {
  title: 'Sürüş Tutkusu & Bağımsızlık Azmi',
  description: "Tamamen kendi biriktirdiğim bütçeyle, kimseden destek almadan ve gizlilikle yürüterek kazandığım ehliyet ve Kuba Superlight 200 cruiser motosikletim. Bu süreç benim için sadece bir sürüş tutkusu değil; odaklanma, azim ve finansal disiplinin somut bir zaferidir. Mekanik ve yol geometrisi analizleriyle harmanladığım bu hobiyi aktif olarak sürdürüyorum.",
  image: '/images/motor.jpg',
  id: 3
}];
var projects = [{
  title: 'TROMPET',
  intro: '2D Strategic Card Game (Unity Engine)',
  description: "Unity motoru üzerinde C# ile geliştirilen, yüksek yoğunluklu bir strateji ve oyun teorisi simülasyonu. Proje, dinamik kart mekaniklerini ve oyuncu kararlarını yönetmek için optimize edilmiş bir Durum Makinesi (State Machine) mimarisi üzerine kurulmuştur. Kartların birbiriyle olan karmaşık etkileşimleri, olasılık hesaplamaları ve dinamik animasyon kuyrukları tamamen asenkron veri yapılarıyla yönetilmektedir.",
  image: '/trompet.jpg',
  tags: ['Unity', 'C#', 'Game Dev'],
  source: '#',
  visit: '#',
  id: 0
}, {
  title: 'DİSİPLİN',
  intro: 'Personal Productivity Ecosystem',
  description: "Kişisel zaman yönetimini ve odaklanma disiplini optimize etmek amacıyla geliştirilmiş, Next.js ve Tailwind CSS tabanlı bir modern web uygulaması. Arka planda, kullanıcı alışkanlıklarını ve rutin verimlilik grafiklerini analiz eden, Prompt Engineering ve yapay zeka ajanı (AI Agent) mimarileriyle entegre bir veri işleme modeli barındırır. Bilişsel yükü azaltmayı hedefleyen, performans odaklı ve minimalist bir verimlilik ekosistemidir.",
  image: '/images/disiplin.jpg',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiaG9iYmllcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImlkIiwicHJvamVjdHMiLCJpbnRybyIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsT0FBTyxHQUFHLENBQ3JCO0FBQ0VDLE9BQUssRUFBRSxpQ0FEVDtBQUVFQyxhQUFXLEVBQUUsOFNBRmY7QUFHRUMsT0FBSyxFQUFFLG1CQUhUO0FBSUVDLElBQUUsRUFBRTtBQUpOLENBRHFCLEVBT3JCO0FBQ0VILE9BQUssRUFBRSxtQ0FEVDtBQUVFQyxhQUFXLEVBQUUsK1FBRmY7QUFHRUMsT0FBSyxFQUFFLHNCQUhUO0FBSUVDLElBQUUsRUFBRTtBQUpOLENBUHFCLEVBYXJCO0FBQ0VILE9BQUssRUFBRSwyQ0FEVDtBQUVFQyxhQUFXLEVBQUUsZ1VBRmY7QUFHRUMsT0FBSyxFQUFFLHNCQUhUO0FBSUVDLElBQUUsRUFBRTtBQUpOLENBYnFCLEVBbUJyQjtBQUNFSCxPQUFLLEVBQUUsa0NBRFQ7QUFFRUMsYUFBVyxFQUFFLGtXQUZmO0FBR0VDLE9BQUssRUFBRSxtQkFIVDtBQUlFQyxJQUFFLEVBQUU7QUFKTixDQW5CcUIsQ0FBaEI7QUEyQkEsSUFBTUMsUUFBUSxHQUFHLENBQ3RCO0FBQ0VKLE9BQUssRUFBRSxTQURUO0FBRUVLLE9BQUssRUFBRSx1Q0FGVDtBQUdFSixhQUFXLEVBQUUsNFpBSGY7QUFJRUMsT0FBSyxFQUFFLGNBSlQ7QUFLRUksTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsVUFBaEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsR0FOVjtBQU9FQyxPQUFLLEVBQUUsR0FQVDtBQVFFTCxJQUFFLEVBQUU7QUFSTixDQURzQixFQVd0QjtBQUNFSCxPQUFLLEVBQUUsVUFEVDtBQUVFSyxPQUFLLEVBQUUsaUNBRlQ7QUFHRUosYUFBVyxFQUFFLHNiQUhmO0FBSUVDLE9BQUssRUFBRSxzQkFKVDtBQUtFSSxNQUFJLEVBQUUsQ0FBQyxTQUFELEVBQVksY0FBWixFQUE0QixJQUE1QixDQUxSO0FBTUVDLFFBQU0sRUFBRSxHQU5WO0FBT0VDLE9BQUssRUFBRSxHQVBUO0FBUUVMLElBQUUsRUFBRTtBQVJOLENBWHNCLENBQWpCO0FBdUJBLElBQU1NLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsRUFLMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBTDBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkMjIyYWM0MGNjNWUzYzBlYmJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaG9iYmllcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnS2xhc2lrIE3DvHppayAmIEtlbWFuIFByYXRpa2xlcmknLFxuICAgIGRlc2NyaXB0aW9uOiBcIktlbWFuIHByYXRpa2xlcmksIGJhbmEgYmlyIG3DvGhlbmRpcyBvbGFyYWsgb2Rha2xhbm1hIHPDvHJlc2luaSAoZGVlcCB3b3JrKSB1emF0bWF5xLEgdmUga2FzIGhhZsSxemFzxLEgaWxlIHppaGluc2VsIGtvb3JkaW5hc3lvbiBhcmFzxLFuZGFraSBzZW5rcm9uaXphc3lvbnUgecO2bmV0bWV5aSDDtsSfcmV0dGkuIE1ldG9kaWsgw6dhbMSxxZ9tYSwgdXp1biB2YWRlbGkgc2FixLFyIHZlIGnFn2l0c2VsIGFuYWxpdGlrIGFsZ8SxIGdpYmkga3JpdGlrIG3DvGhlbmRpc2xpayB2ZSBhZGFwdGFzeW9uIGJlY2VyaWxlcmltaSBkb8SfcnVkYW4gYmVzbGl5b3IuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2tlbWFuLmpwZycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NhdHJhbsOnICYgU3RyYXRlamkgU2ltw7xsYXN5b25sYXLEsScsXG4gICAgZGVzY3JpcHRpb246IFwiU2F0cmFuw6cgdmUgdHVybnV2YSBzw7xyZcOnbGVyaTsgZGluYW1payBrYXJhciBhbG1hLCBveXVuIHRlb3Jpc2kgdmUga3JpeiBhbmxhcsSxbmRhIHNvxJ91a2thbmzEsSBrYWxhYmlsbWUgeWV0aWxlcmltaSBlbiDDvHN0IGR1eWF5YSDDp8Sxa2FyZMSxLiBFTE8gdmUgVUtEIHJhdGluZyB0YWtpcGxlcml5bGUgYW5hbGl0aWsgb2xhcmFrIGJlc2xlZGnEn2ltIGJ1IGhvYmksIGJhbmEgaGFtbGUgeWFwbWFkYW4gNSBhZMSxbSBzb25yYXPEsW7EsSBwbGFubGFtYSBmZWxzZWZlc2luaSBhxZ/EsWxhZMSxLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9zYW50cmFuYy5qcGcnLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFbnRlbGVrdMO8ZWwgTcO8bmF6YXJhICYgUG9kY2FzdCBBbmFsaXpsZXJpJyxcbiAgICBkZXNjcmlwdGlvbjogXCJCZWxpcmxpIGJpciBrb251eXUgZWxlIGFsxLFwIGV0cmFmbMSxY2EgYXJnw7xtYW50YXN5b24gw7xyZXRtZWsgdmUga2VuZGkgb2x1xZ90dXJkdcSfdW0gZmlraXIgZWtzZW5sZXJpbmRlIGtvbnXFn21hazsgYmFuYSBoaXRhYmV0LCBoxLF6bMSxIHNlbnRlemxlbWUgdmUgw6fDvHLDvHRtZSBkaXNpcGxpbmkga2F6YW5kxLFyZMSxLiBLYXJhYsO8ayfDvCB0ZW1zaWwgZXR0acSfaW0ga8O8cnPDvGxlcmRlbiBkaWppdGFsIG9ydGFtYSBha3RhcmTEscSfxLFtIGJ1IGJpcmlraW07IGtyaXogecO2bmV0aW1pbmkgdmUgYW5hbGl0aWsgZMO8xZ/DvG5jZXlpIGdlbGnFn3Rpcm1lbmluIGVuIGVmZWt0aWYgeW9sdS5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvbXVuYXphcmEucG5nJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU8O8csO8xZ8gVHV0a3VzdSAmIEJhxJ/EsW1zxLF6bMSxayBBem1pJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUYW1hbWVuIGtlbmRpIGJpcmlrdGlyZGnEn2ltIGLDvHTDp2V5bGUsIGtpbXNlZGVuIGRlc3RlayBhbG1hZGFuIHZlIGdpemxpbGlrbGUgecO8csO8dGVyZWsga2F6YW5kxLHEn8SxbSBlaGxpeWV0IHZlIEt1YmEgU3VwZXJsaWdodCAyMDAgY3J1aXNlciBtb3Rvc2lrbGV0aW0uIEJ1IHPDvHJlw6cgYmVuaW0gacOnaW4gc2FkZWNlIGJpciBzw7xyw7zFnyB0dXRrdXN1IGRlxJ9pbDsgb2Rha2xhbm1hLCBhemltIHZlIGZpbmFuc2FsIGRpc2lwbGluaW4gc29tdXQgYmlyIHphZmVyaWRpci4gTWVrYW5payB2ZSB5b2wgZ2VvbWV0cmlzaSBhbmFsaXpsZXJpeWxlIGhhcm1hbmxhZMSxxJ/EsW0gYnUgaG9iaXlpIGFrdGlmIG9sYXJhayBzw7xyZMO8csO8eW9ydW0uXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL21vdG9yLmpwZycsXG4gICAgaWQ6IDMsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1RST01QRVQnLFxuICAgIGludHJvOiAnMkQgU3RyYXRlZ2ljIENhcmQgR2FtZSAoVW5pdHkgRW5naW5lKScsXG4gICAgZGVzY3JpcHRpb246IFwiVW5pdHkgbW90b3J1IMO8emVyaW5kZSBDIyBpbGUgZ2VsacWfdGlyaWxlbiwgecO8a3NlayB5b8SfdW5sdWtsdSBiaXIgc3RyYXRlamkgdmUgb3l1biB0ZW9yaXNpIHNpbcO8bGFzeW9udS4gUHJvamUsIGRpbmFtaWsga2FydCBtZWthbmlrbGVyaW5pIHZlIG95dW5jdSBrYXJhcmxhcsSxbsSxIHnDtm5ldG1layBpw6dpbiBvcHRpbWl6ZSBlZGlsbWnFnyBiaXIgRHVydW0gTWFraW5lc2kgKFN0YXRlIE1hY2hpbmUpIG1pbWFyaXNpIMO8emVyaW5lIGt1cnVsbXXFn3R1ci4gS2FydGxhcsSxbiBiaXJiaXJpeWxlIG9sYW4ga2FybWHFn8SxayBldGtpbGXFn2ltbGVyaSwgb2xhc8SxbMSxayBoZXNhcGxhbWFsYXLEsSB2ZSBkaW5hbWlrIGFuaW1hc3lvbiBrdXlydWtsYXLEsSB0YW1hbWVuIGFzZW5rcm9uIHZlcmkgeWFwxLFsYXLEsXlsYSB5w7ZuZXRpbG1la3RlZGlyLlwiLFxuICAgIGltYWdlOiAnL3Ryb21wZXQuanBnJyxcbiAgICB0YWdzOiBbJ1VuaXR5JywgJ0MjJywgJ0dhbWUgRGV2J10sXG4gICAgc291cmNlOiAnIycsXG4gICAgdmlzaXQ6ICcjJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnRMSwU8SwUEzEsE4nLFxuICAgIGludHJvOiAnUGVyc29uYWwgUHJvZHVjdGl2aXR5IEVjb3N5c3RlbScsXG4gICAgZGVzY3JpcHRpb246IFwiS2nFn2lzZWwgemFtYW4gecO2bmV0aW1pbmkgdmUgb2Rha2xhbm1hIGRpc2lwbGluaSBvcHRpbWl6ZSBldG1layBhbWFjxLF5bGEgZ2VsacWfdGlyaWxtacWfLCBOZXh0LmpzIHZlIFRhaWx3aW5kIENTUyB0YWJhbmzEsSBiaXIgbW9kZXJuIHdlYiB1eWd1bGFtYXPEsS4gQXJrYSBwbGFuZGEsIGt1bGxhbsSxY8SxIGFsxLHFn2thbmzEsWtsYXLEsW7EsSB2ZSBydXRpbiB2ZXJpbWxpbGlrIGdyYWZpa2xlcmluaSBhbmFsaXogZWRlbiwgUHJvbXB0IEVuZ2luZWVyaW5nIHZlIHlhcGF5IHpla2EgYWphbsSxIChBSSBBZ2VudCkgbWltYXJpbGVyaXlsZSBlbnRlZ3JlIGJpciB2ZXJpIGnFn2xlbWUgbW9kZWxpIGJhcsSxbmTEsXLEsXIuIEJpbGnFn3NlbCB5w7xrw7wgYXphbHRtYXnEsSBoZWRlZmxleWVuLCBwZXJmb3JtYW5zIG9kYWtsxLEgdmUgbWluaW1hbGlzdCBiaXIgdmVyaW1saWxpayBla29zaXN0ZW1pZGlyLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9kaXNpcGxpbi5qcGcnLFxuICAgIHRhZ3M6IFsnTmV4dC5qcycsICdUYWlsd2luZCBDU1MnLCAnQUknXSxcbiAgICBzb3VyY2U6ICcjJyxcbiAgICB2aXNpdDogJyMnLFxuICAgIGlkOiAxLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDA4LCB0ZXh0OiAnS1RVIEVsay4gRWxrLiBNdWggbWV6dW4gb2xkdW0nLCB9LFxuICB7IHllYXI6IDIwMDksIHRleHQ6ICdUw7xyayBUZWxla29tIFV6bWFuIHlhcmTEsW1jxLFzxLEgb2xhcmFrIGnFn2UgYmHFn2xhZMSxbScsIH0sXG4gIHsgeWVhcjogMjAxMywgdGV4dDogJ1TDvHJrIFRlbGVrb20gREMgRW5lcmppIFV6bWFuxLEnLCB9LFxuICB7IHllYXI6IDIwMTYsIHRleHQ6ICdUw7xyayBUZWxla29tIERDIEVuZXJqaSBZw7ZuZXRpY2knLCB9LFxuICB7IHllYXI6IDIwMTcsIHRleHQ6ICdUw7xyayBUZWxla29tIEVTUyBNw7xkw7xyw7wnLCB9LFxuXTsiXSwic291cmNlUm9vdCI6IiJ9