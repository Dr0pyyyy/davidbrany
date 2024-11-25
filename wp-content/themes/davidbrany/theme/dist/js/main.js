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


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlsYXRlcnJhLy4vc3JjL2pzL3NjcmlwdHMvaGVhZGVyLmpzIiwid2VicGFjazovL3ZpbGF0ZXJyYS8uL3NyYy9qcy9zY3JpcHRzL3RoZW1lLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly92aWxhdGVycmEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZpbGF0ZXJyYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9PcGVuIGNsb3NlIG1lbnVcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaGFtYnVyZ2VySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyLWljb25cIik7XHJcbiAgICBjb25zdCBoZWFkZXJFeHBhbmRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLWV4cGFuZGVkXCIpO1xyXG4gICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItZXhwYW5kZWQtdG9wLWNsb3NlLWljb25cIik7XHJcblxyXG4gICAgLy8gT3BlbiB0aGUgbWVudVxyXG4gICAgaGFtYnVyZ2VySWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoZWFkZXJFeHBhbmRlZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xvc2UgdGhlIG1lbnVcclxuICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoZWFkZXJFeHBhbmRlZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZVRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhlbWUtYnRuXCIpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCB0aGVtZUljb25zID0gdGhlbWVUb2dnbGVCdXR0b24ucXVlcnlTZWxlY3RvckFsbChcIi50aGVtZS1pY29uXCIpO1xyXG5cclxuICAgIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IFwibGlnaHRcIjtcclxuICAgIGJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBzYXZlZFRoZW1lKTtcclxuXHJcbiAgICAvLyBUb2dnbGUgdGhlbWUgaWNvbnMgYmFzZWQgb24gdGhlIHNhdmVkIHRoZW1lXHJcbiAgICB0b2dnbGVUaGVtZUljb25zKHNhdmVkVGhlbWUpO1xyXG5cclxuICAgIHRoZW1lVG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRoZW1lID0gYm9keS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUaGVtZSA9IGN1cnJlbnRUaGVtZSA9PT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XHJcbiAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIG5ld1RoZW1lKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5ld1RoZW1lKTtcclxuXHJcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSB0aGVtZSBpY29ucyBvbiBidXR0b24gY2xpY2tcclxuICAgICAgICB0b2dnbGVUaGVtZUljb25zKG5ld1RoZW1lKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRoZW1lSWNvbnModGhlbWUpIHtcclxuICAgICAgICBpZiAodGhlbWUgPT09IFwibGlnaHRcIikge1xyXG4gICAgICAgICAgICB0aGVtZUljb25zWzBdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vIFN1biBpY29uXHJcbiAgICAgICAgICAgIHRoZW1lSWNvbnNbMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgLy8gTW9vbiBpY29uXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhlbWVJY29uc1swXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICAvLyBTdW4gaWNvblxyXG4gICAgICAgICAgICB0aGVtZUljb25zWzFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vIE1vb24gaWNvblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3NjcmlwdHMvaGVhZGVyXCJcclxuaW1wb3J0IFwiLi9zY3JpcHRzL3RoZW1lLXRvZ2dsZVwiIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbWJ1cmdlckljb24iLCJnZXRFbGVtZW50QnlJZCIsImhlYWRlckV4cGFuZGVkIiwiY2xvc2VJY29uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRoZW1lVG9nZ2xlQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImJvZHkiLCJ0aGVtZUljb25zIiwicXVlcnlTZWxlY3RvckFsbCIsInNhdmVkVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0QXR0cmlidXRlIiwidG9nZ2xlVGhlbWVJY29ucyIsImN1cnJlbnRUaGVtZSIsImdldEF0dHJpYnV0ZSIsIm5ld1RoZW1lIiwic2V0SXRlbSIsInRoZW1lIiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==