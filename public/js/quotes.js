/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/quotes.js":
/*!********************************!*\
  !*** ./resources/js/quotes.js ***!
  \********************************/
/***/ (() => {

eval("// $( document ).ready(function() {\n//     // event create quote\n//     $('body').on('click', '.js-create-quote', function(){\n//         console.log(123);\n//         let source = $('.js-source-add-field').val();\n//         let quote = $('.js-quote-add-field').val();\n//         console.log(source, quote);\n//         createQuote(source, quote);\n//     });\n//     // ----\n// });\n// function create quote\nfunction createQuote(source, quote) {\n  $.ajax({\n    type: \"POST\",\n    url: route_create_quote,\n    dataType: 'json',\n    data: {\n      source: source,\n      quote: quote,\n      _token: $('meta[name=\"csrf-token\"]').attr('content')\n    },\n    success: function success(result) {},\n    error: function error(result) {}\n  });\n} // ----//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcXVvdGVzLmpzPzgwY2UiXSwibmFtZXMiOlsiY3JlYXRlUXVvdGUiLCJzb3VyY2UiLCJxdW90ZSIsIiQiLCJhamF4IiwidHlwZSIsInVybCIsInJvdXRlX2NyZWF0ZV9xdW90ZSIsImRhdGFUeXBlIiwiZGF0YSIsIl90b2tlbiIsImF0dHIiLCJzdWNjZXNzIiwicmVzdWx0IiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBLFNBQVNBLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCQyxLQUE3QixFQUFtQztBQUMvQkMsRUFBQUEsQ0FBQyxDQUFDQyxJQUFGLENBQU87QUFDSEMsSUFBQUEsSUFBSSxFQUFFLE1BREg7QUFFSEMsSUFBQUEsR0FBRyxFQUFFQyxrQkFGRjtBQUdIQyxJQUFBQSxRQUFRLEVBQUUsTUFIUDtBQUlIQyxJQUFBQSxJQUFJLEVBQUU7QUFDRlIsTUFBQUEsTUFBTSxFQUFFQSxNQUROO0FBRUZDLE1BQUFBLEtBQUssRUFBRUEsS0FGTDtBQUdGUSxNQUFBQSxNQUFNLEVBQUVQLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCUSxJQUE3QixDQUFrQyxTQUFsQztBQUhOLEtBSkg7QUFTSEMsSUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxNQUFWLEVBQWtCLENBRTFCLENBWEU7QUFZSEMsSUFBQUEsS0FBSyxFQUFFLGVBQVVELE1BQVYsRUFBa0IsQ0FFeEI7QUFkRSxHQUFQO0FBZ0JILEMsQ0FDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbi8vICAgICAvLyBldmVudCBjcmVhdGUgcXVvdGVcclxuLy8gICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmpzLWNyZWF0ZS1xdW90ZScsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coMTIzKTtcclxuLy8gICAgICAgICBsZXQgc291cmNlID0gJCgnLmpzLXNvdXJjZS1hZGQtZmllbGQnKS52YWwoKTtcclxuLy8gICAgICAgICBsZXQgcXVvdGUgPSAkKCcuanMtcXVvdGUtYWRkLWZpZWxkJykudmFsKCk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coc291cmNlLCBxdW90ZSk7XHJcbi8vICAgICAgICAgY3JlYXRlUXVvdGUoc291cmNlLCBxdW90ZSk7XHJcbi8vICAgICB9KTtcclxuLy8gICAgIC8vIC0tLS1cclxuLy8gfSk7XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlIHF1b3RlXHJcbmZ1bmN0aW9uIGNyZWF0ZVF1b3RlKHNvdXJjZSwgcXVvdGUpe1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IHJvdXRlX2NyZWF0ZV9xdW90ZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXHJcbiAgICAgICAgICAgIHF1b3RlOiBxdW90ZSxcclxuICAgICAgICAgICAgX3Rva2VuOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuLy8gLS0tLSJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcXVvdGVzLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/quotes.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/quotes.js"]();
/******/ 	
/******/ })()
;