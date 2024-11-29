/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/scripts/header.js":
/*!**********************************!*\
  !*** ./src/js/scripts/header.js ***!
  \**********************************/
/***/ (function() {

//Open close menu
document.addEventListener("DOMContentLoaded", function () {
  var hamburgerIcon = document.getElementById("hamburger-icon");
  var headerExpanded = document.getElementById("header-expanded");
  var closeIcon = document.getElementById("header-expanded-top-close-icon");

  // Open the menu
  hamburgerIcon.addEventListener("click", function (event) {
    event.preventDefault();
    headerExpanded.classList.add("active");
  });

  // Close the menu
  closeIcon.addEventListener("click", function (event) {
    event.preventDefault();
    headerExpanded.classList.remove("active");
  });
});

/***/ }),

/***/ "./src/js/scripts/theme-toggle.js":
/*!****************************************!*\
  !*** ./src/js/scripts/theme-toggle.js ***!
  \****************************************/
/***/ (function() {

document.addEventListener("DOMContentLoaded", function () {
  var themeToggleButton = document.querySelector(".theme-btn");
  var body = document.body;
  var themeIcons = themeToggleButton.querySelectorAll(".theme-icon");
  var savedTheme = localStorage.getItem("theme") || "light";
  body.setAttribute("data-theme", savedTheme);

  // Toggle theme icons based on the saved theme
  toggleThemeIcons(savedTheme);
  themeToggleButton.addEventListener("click", function () {
    var currentTheme = body.getAttribute("data-theme");
    var newTheme = currentTheme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Toggle the theme icons on button click
    toggleThemeIcons(newTheme);
  });
  function toggleThemeIcons(theme) {
    if (theme === "light") {
      themeIcons[0].style.display = "block"; // Sun icon
      themeIcons[1].style.display = "none"; // Moon icon
    } else {
      themeIcons[0].style.display = "none"; // Sun icon
      themeIcons[1].style.display = "block"; // Moon icon
    }
  }
});

/***/ }),

/***/ "./src/js/scripts/work-card.js":
/*!*************************************!*\
  !*** ./src/js/scripts/work-card.js ***!
  \*************************************/
/***/ (function() {

jQuery(document).ready(function ($) {
  $(".my-work-card").mouseleave(function () {
    $(this).removeClass("hover");
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/header */ "./src/js/scripts/header.js");
/* harmony import */ var _scripts_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_theme_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/theme-toggle */ "./src/js/scripts/theme-toggle.js");
/* harmony import */ var _scripts_theme_toggle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_theme_toggle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_work_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/work-card */ "./src/js/scripts/work-card.js");
/* harmony import */ var _scripts_work_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_work_card__WEBPACK_IMPORTED_MODULE_2__);



}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDRSxXQUFXLENBQUMsT0FBTyxDQUFDO0VBQzlCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7O1VDSko7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnlCO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWxhdGVycmEvLi9zcmMvanMvc2NyaXB0cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhLy4vc3JjL2pzL3NjcmlwdHMvdGhlbWUtdG9nZ2xlLmpzIiwid2VicGFjazovL3ZpbGF0ZXJyYS8uL3NyYy9qcy9zY3JpcHRzL3dvcmstY2FyZC5qcyIsIndlYnBhY2s6Ly92aWxhdGVycmEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZpbGF0ZXJyYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9PcGVuIGNsb3NlIG1lbnVcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaGFtYnVyZ2VySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyLWljb25cIik7XHJcbiAgICBjb25zdCBoZWFkZXJFeHBhbmRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLWV4cGFuZGVkXCIpO1xyXG4gICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItZXhwYW5kZWQtdG9wLWNsb3NlLWljb25cIik7XHJcblxyXG4gICAgLy8gT3BlbiB0aGUgbWVudVxyXG4gICAgaGFtYnVyZ2VySWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoZWFkZXJFeHBhbmRlZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xvc2UgdGhlIG1lbnVcclxuICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoZWFkZXJFeHBhbmRlZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZVRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhlbWUtYnRuXCIpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCB0aGVtZUljb25zID0gdGhlbWVUb2dnbGVCdXR0b24ucXVlcnlTZWxlY3RvckFsbChcIi50aGVtZS1pY29uXCIpO1xyXG5cclxuICAgIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IFwibGlnaHRcIjtcclxuICAgIGJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBzYXZlZFRoZW1lKTtcclxuXHJcbiAgICAvLyBUb2dnbGUgdGhlbWUgaWNvbnMgYmFzZWQgb24gdGhlIHNhdmVkIHRoZW1lXHJcbiAgICB0b2dnbGVUaGVtZUljb25zKHNhdmVkVGhlbWUpO1xyXG5cclxuICAgIHRoZW1lVG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRoZW1lID0gYm9keS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUaGVtZSA9IGN1cnJlbnRUaGVtZSA9PT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XHJcbiAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIG5ld1RoZW1lKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5ld1RoZW1lKTtcclxuXHJcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSB0aGVtZSBpY29ucyBvbiBidXR0b24gY2xpY2tcclxuICAgICAgICB0b2dnbGVUaGVtZUljb25zKG5ld1RoZW1lKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRoZW1lSWNvbnModGhlbWUpIHtcclxuICAgICAgICBpZiAodGhlbWUgPT09IFwibGlnaHRcIikge1xyXG4gICAgICAgICAgICB0aGVtZUljb25zWzBdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vIFN1biBpY29uXHJcbiAgICAgICAgICAgIHRoZW1lSWNvbnNbMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgLy8gTW9vbiBpY29uXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhlbWVJY29uc1swXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICAvLyBTdW4gaWNvblxyXG4gICAgICAgICAgICB0aGVtZUljb25zWzFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vIE1vb24gaWNvblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xyXG4gICAgJChcIi5teS13b3JrLWNhcmRcIikubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImhvdmVyXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc2NyaXB0cy9oZWFkZXJcIlxyXG5pbXBvcnQgXCIuL3NjcmlwdHMvdGhlbWUtdG9nZ2xlXCJcclxuaW1wb3J0IFwiLi9zY3JpcHRzL3dvcmstY2FyZFwiIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbWJ1cmdlckljb24iLCJnZXRFbGVtZW50QnlJZCIsImhlYWRlckV4cGFuZGVkIiwiY2xvc2VJY29uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRoZW1lVG9nZ2xlQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImJvZHkiLCJ0aGVtZUljb25zIiwicXVlcnlTZWxlY3RvckFsbCIsInNhdmVkVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0QXR0cmlidXRlIiwidG9nZ2xlVGhlbWVJY29ucyIsImN1cnJlbnRUaGVtZSIsImdldEF0dHJpYnV0ZSIsIm5ld1RoZW1lIiwic2V0SXRlbSIsInRoZW1lIiwic3R5bGUiLCJkaXNwbGF5IiwialF1ZXJ5IiwicmVhZHkiLCIkIiwibW91c2VsZWF2ZSIsInJlbW92ZUNsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==