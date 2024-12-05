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

  // Set the correct image based on the saved theme
  updateProfilePicture(savedTheme);

  // Toggle theme icons based on the saved theme
  toggleThemeIcons(savedTheme);
  themeToggleButton.addEventListener("click", function () {
    var currentTheme = body.getAttribute("data-theme");
    var newTheme = currentTheme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Update the profile picture based on the new theme
    updateProfilePicture(newTheme);

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

  // Update the profile picture based on the theme
  function updateProfilePicture(theme) {
    var profilePictures = document.querySelectorAll('.profile-picture');
    profilePictures.forEach(function (img) {
      if (theme === "light") {
        if (img.classList.contains('mobile-profile-picture')) {
          img.src = "http://localhost:8080/davidbrany/wp-content/uploads/2024/12/profile-picture.png"; // Light theme image
        }
        if (img.classList.contains('desktop-profile-picture')) {
          img.src = "http://localhost:8080/davidbrany/wp-content/uploads/2024/12/profile-picture.png"; // Light theme image
        }
      } else {
        if (img.classList.contains('mobile-profile-picture')) {
          img.src = "http://localhost:8080/davidbrany/wp-content/uploads/2024/12/profile-picture-dark.png"; // Dark theme image
        }
        if (img.classList.contains('desktop-profile-picture')) {
          img.src = "http://localhost:8080/davidbrany/wp-content/uploads/2024/12/profile-picture-dark.png"; // Dark theme image
        }
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdEQsSUFBTUMsYUFBYSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUMvRCxJQUFNQyxjQUFjLEdBQUdKLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGlCQUFpQixDQUFDO0VBQ2pFLElBQU1FLFNBQVMsR0FBR0wsUUFBUSxDQUFDRyxjQUFjLENBQUMsZ0NBQWdDLENBQUM7O0VBRTNFO0VBQ0FELGFBQWEsQ0FBQ0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVLLEtBQUssRUFBRTtJQUNyREEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUN0QkgsY0FBYyxDQUFDSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDMUMsQ0FBQyxDQUFDOztFQUVGO0VBQ0FKLFNBQVMsQ0FBQ0osZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVLLEtBQUssRUFBRTtJQUNqREEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUN0QkgsY0FBYyxDQUFDSSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7RUFDN0MsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDakJGVixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDaEQsSUFBTVUsaUJBQWlCLEdBQUdYLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFlBQVksQ0FBQztFQUM5RCxJQUFNQyxJQUFJLEdBQUdiLFFBQVEsQ0FBQ2EsSUFBSTtFQUMxQixJQUFNQyxVQUFVLEdBQUdILGlCQUFpQixDQUFDSSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7RUFFcEUsSUFBTUMsVUFBVSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPO0VBQzNETCxJQUFJLENBQUNNLFlBQVksQ0FBQyxZQUFZLEVBQUVILFVBQVUsQ0FBQzs7RUFFM0M7RUFDQUksb0JBQW9CLENBQUNKLFVBQVUsQ0FBQzs7RUFFaEM7RUFDQUssZ0JBQWdCLENBQUNMLFVBQVUsQ0FBQztFQUU1QkwsaUJBQWlCLENBQUNWLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQzlDLElBQU1xQixZQUFZLEdBQUdULElBQUksQ0FBQ1UsWUFBWSxDQUFDLFlBQVksQ0FBQztJQUVwRCxJQUFNQyxRQUFRLEdBQUdGLFlBQVksS0FBSyxPQUFPLEdBQUcsTUFBTSxHQUFHLE9BQU87SUFDNURULElBQUksQ0FBQ00sWUFBWSxDQUFDLFlBQVksRUFBRUssUUFBUSxDQUFDO0lBQ3pDUCxZQUFZLENBQUNRLE9BQU8sQ0FBQyxPQUFPLEVBQUVELFFBQVEsQ0FBQzs7SUFFdkM7SUFDQUosb0JBQW9CLENBQUNJLFFBQVEsQ0FBQzs7SUFFOUI7SUFDQUgsZ0JBQWdCLENBQUNHLFFBQVEsQ0FBQztFQUM5QixDQUFDLENBQUM7RUFFRixTQUFTSCxnQkFBZ0JBLENBQUNLLEtBQUssRUFBRTtJQUM3QixJQUFJQSxLQUFLLEtBQUssT0FBTyxFQUFFO01BQ25CWixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNhLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDO01BQ3ZDZCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNhLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFFO0lBQzNDLENBQUMsTUFBTTtNQUNIZCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNhLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFFO01BQ3ZDZCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNhLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQzNDO0VBQ0o7O0VBRUE7RUFDQSxTQUFTUixvQkFBb0JBLENBQUNNLEtBQUssRUFBRTtJQUNqQyxJQUFNRyxlQUFlLEdBQUc3QixRQUFRLENBQUNlLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO0lBQ3JFYyxlQUFlLENBQUNDLE9BQU8sQ0FBQyxVQUFBQyxHQUFHLEVBQUk7TUFDM0IsSUFBSUwsS0FBSyxLQUFLLE9BQU8sRUFBRTtRQUNuQixJQUFJSyxHQUFHLENBQUN2QixTQUFTLENBQUN3QixRQUFRLENBQUMsd0JBQXdCLENBQUMsRUFBRTtVQUNsREQsR0FBRyxDQUFDRSxHQUFHLEdBQUcsaUZBQWlGLENBQUMsQ0FBQztRQUNqRztRQUNBLElBQUlGLEdBQUcsQ0FBQ3ZCLFNBQVMsQ0FBQ3dCLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1VBQ25ERCxHQUFHLENBQUNFLEdBQUcsR0FBRyxpRkFBaUYsQ0FBQyxDQUFDO1FBQ2pHO01BQ0osQ0FBQyxNQUFNO1FBQ0gsSUFBSUYsR0FBRyxDQUFDdkIsU0FBUyxDQUFDd0IsUUFBUSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7VUFDbERELEdBQUcsQ0FBQ0UsR0FBRyxHQUFHLHNGQUFzRixDQUFDLENBQUM7UUFDdEc7UUFDQSxJQUFJRixHQUFHLENBQUN2QixTQUFTLENBQUN3QixRQUFRLENBQUMseUJBQXlCLENBQUMsRUFBRTtVQUNuREQsR0FBRyxDQUFDRSxHQUFHLEdBQUcsc0ZBQXNGLENBQUMsQ0FBQztRQUN0RztNQUNKO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7QUMzREZDLE1BQU0sQ0FBQ2xDLFFBQVEsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDLFVBQVNDLENBQUMsRUFBRTtFQUMvQkEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDQyxVQUFVLENBQUMsWUFBVztJQUN2Q0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDRSxXQUFXLENBQUMsT0FBTyxDQUFDO0VBQzlCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7O1VDSko7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnlCO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWxhdGVycmEvLi9zcmMvanMvc2NyaXB0cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhLy4vc3JjL2pzL3NjcmlwdHMvdGhlbWUtdG9nZ2xlLmpzIiwid2VicGFjazovL3ZpbGF0ZXJyYS8uL3NyYy9qcy9zY3JpcHRzL3dvcmstY2FyZC5qcyIsIndlYnBhY2s6Ly92aWxhdGVycmEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZpbGF0ZXJyYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmlsYXRlcnJhLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9PcGVuIGNsb3NlIG1lbnVcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaGFtYnVyZ2VySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyLWljb25cIik7XHJcbiAgICBjb25zdCBoZWFkZXJFeHBhbmRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLWV4cGFuZGVkXCIpO1xyXG4gICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItZXhwYW5kZWQtdG9wLWNsb3NlLWljb25cIik7XHJcblxyXG4gICAgLy8gT3BlbiB0aGUgbWVudVxyXG4gICAgaGFtYnVyZ2VySWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoZWFkZXJFeHBhbmRlZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xvc2UgdGhlIG1lbnVcclxuICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoZWFkZXJFeHBhbmRlZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGVtZVRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhlbWUtYnRuXCIpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCB0aGVtZUljb25zID0gdGhlbWVUb2dnbGVCdXR0b24ucXVlcnlTZWxlY3RvckFsbChcIi50aGVtZS1pY29uXCIpO1xyXG5cclxuICAgIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IFwibGlnaHRcIjtcclxuICAgIGJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBzYXZlZFRoZW1lKTtcclxuXHJcbiAgICAvLyBTZXQgdGhlIGNvcnJlY3QgaW1hZ2UgYmFzZWQgb24gdGhlIHNhdmVkIHRoZW1lXHJcbiAgICB1cGRhdGVQcm9maWxlUGljdHVyZShzYXZlZFRoZW1lKTtcclxuXHJcbiAgICAvLyBUb2dnbGUgdGhlbWUgaWNvbnMgYmFzZWQgb24gdGhlIHNhdmVkIHRoZW1lXHJcbiAgICB0b2dnbGVUaGVtZUljb25zKHNhdmVkVGhlbWUpO1xyXG5cclxuICAgIHRoZW1lVG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRoZW1lID0gYm9keS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUaGVtZSA9IGN1cnJlbnRUaGVtZSA9PT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XHJcbiAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIG5ld1RoZW1lKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5ld1RoZW1lKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBwcm9maWxlIHBpY3R1cmUgYmFzZWQgb24gdGhlIG5ldyB0aGVtZVxyXG4gICAgICAgIHVwZGF0ZVByb2ZpbGVQaWN0dXJlKG5ld1RoZW1lKTtcclxuXHJcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSB0aGVtZSBpY29ucyBvbiBidXR0b24gY2xpY2tcclxuICAgICAgICB0b2dnbGVUaGVtZUljb25zKG5ld1RoZW1lKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRoZW1lSWNvbnModGhlbWUpIHtcclxuICAgICAgICBpZiAodGhlbWUgPT09IFwibGlnaHRcIikge1xyXG4gICAgICAgICAgICB0aGVtZUljb25zWzBdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vIFN1biBpY29uXHJcbiAgICAgICAgICAgIHRoZW1lSWNvbnNbMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgLy8gTW9vbiBpY29uXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhlbWVJY29uc1swXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICAvLyBTdW4gaWNvblxyXG4gICAgICAgICAgICB0aGVtZUljb25zWzFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IC8vIE1vb24gaWNvblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIHByb2ZpbGUgcGljdHVyZSBiYXNlZCBvbiB0aGUgdGhlbWVcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2ZpbGVQaWN0dXJlKHRoZW1lKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZVBpY3R1cmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2ZpbGUtcGljdHVyZScpO1xyXG4gICAgICAgIHByb2ZpbGVQaWN0dXJlcy5mb3JFYWNoKGltZyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGVtZSA9PT0gXCJsaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1nLmNsYXNzTGlzdC5jb250YWlucygnbW9iaWxlLXByb2ZpbGUtcGljdHVyZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2RhdmlkYnJhbnkvd3AtY29udGVudC91cGxvYWRzLzIwMjQvMTIvcHJvZmlsZS1waWN0dXJlLnBuZ1wiOyAvLyBMaWdodCB0aGVtZSBpbWFnZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGltZy5jbGFzc0xpc3QuY29udGFpbnMoJ2Rlc2t0b3AtcHJvZmlsZS1waWN0dXJlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZGF2aWRicmFueS93cC1jb250ZW50L3VwbG9hZHMvMjAyNC8xMi9wcm9maWxlLXBpY3R1cmUucG5nXCI7IC8vIExpZ2h0IHRoZW1lIGltYWdlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1nLmNsYXNzTGlzdC5jb250YWlucygnbW9iaWxlLXByb2ZpbGUtcGljdHVyZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2RhdmlkYnJhbnkvd3AtY29udGVudC91cGxvYWRzLzIwMjQvMTIvcHJvZmlsZS1waWN0dXJlLWRhcmsucG5nXCI7IC8vIERhcmsgdGhlbWUgaW1hZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpbWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZXNrdG9wLXByb2ZpbGUtcGljdHVyZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2RhdmlkYnJhbnkvd3AtY29udGVudC91cGxvYWRzLzIwMjQvMTIvcHJvZmlsZS1waWN0dXJlLWRhcmsucG5nXCI7IC8vIERhcmsgdGhlbWUgaW1hZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XHJcbiAgICAkKFwiLm15LXdvcmstY2FyZFwiKS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaG92ZXJcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zY3JpcHRzL2hlYWRlclwiXHJcbmltcG9ydCBcIi4vc2NyaXB0cy90aGVtZS10b2dnbGVcIlxyXG5pbXBvcnQgXCIuL3NjcmlwdHMvd29yay1jYXJkXCIiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFtYnVyZ2VySWNvbiIsImdldEVsZW1lbnRCeUlkIiwiaGVhZGVyRXhwYW5kZWQiLCJjbG9zZUljb24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidGhlbWVUb2dnbGVCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsInRoZW1lSWNvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2F2ZWRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRBdHRyaWJ1dGUiLCJ1cGRhdGVQcm9maWxlUGljdHVyZSIsInRvZ2dsZVRoZW1lSWNvbnMiLCJjdXJyZW50VGhlbWUiLCJnZXRBdHRyaWJ1dGUiLCJuZXdUaGVtZSIsInNldEl0ZW0iLCJ0aGVtZSIsInN0eWxlIiwiZGlzcGxheSIsInByb2ZpbGVQaWN0dXJlcyIsImZvckVhY2giLCJpbWciLCJjb250YWlucyIsInNyYyIsImpRdWVyeSIsInJlYWR5IiwiJCIsIm1vdXNlbGVhdmUiLCJyZW1vdmVDbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=