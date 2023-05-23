import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=eacf6abd"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/Users/miranraznatovic/Desktop/MIRAN/myprojects/Macbeth/src/main.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=eacf6abd"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import __vite__cjsImport4_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=eacf6abd"; const createRoot = __vite__cjsImport4_reactDom_client["createRoot"];
import { I18nextProvider } from "/node_modules/.vite/deps/react-i18next.js?v=eacf6abd";
import initializeI18n from "/src/locales/i18n.js";
import App from "/src/components/App.jsx?t=1684412142304";
import { Provider, useSelector } from "/node_modules/.vite/deps/react-redux.js?v=eacf6abd";
import { ThemeProvider, createTheme } from "/node_modules/.vite/deps/@mui_material_styles.js?v=eacf6abd";
import store from "/src/redux/store.js";
import darkTheme from "/src/theme/DarkTheme.js";
import lightTheme from "/src/theme/LightTheme.js";
import "/src/main.css?t=1684410142538";
const i18n = initializeI18n();
const AppWithTheme = () => {
  _s();
  const themeMode = useSelector((state) => state.theme.themeMode);
  const theme = createTheme(themeMode ? lightTheme : darkTheme);
  const [showTransition, setShowTransition] = useState(false);
  useEffect(() => {
    setShowTransition(true);
  }, []);
  return /* @__PURE__ */ jsxDEV("div", { className: `transition ${showTransition ? "show" : ""}`, children: /* @__PURE__ */ jsxDEV(ThemeProvider, { theme, children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "/Users/miranraznatovic/Desktop/MIRAN/myprojects/Macbeth/src/main.jsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/Users/miranraznatovic/Desktop/MIRAN/myprojects/Macbeth/src/main.jsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/miranraznatovic/Desktop/MIRAN/myprojects/Macbeth/src/main.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
};
_s(AppWithTheme, "cvk6FQbI+6J7kZmqOI9NEMA0nI8=", false, function() {
  return [useSelector];
});
_c = AppWithTheme;
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(Provider, { store, children: /* @__PURE__ */ jsxDEV(I18nextProvider, { i18n, children: /* @__PURE__ */ jsxDEV(AppWithTheme, {}, void 0, false, {
  fileName: "/Users/miranraznatovic/Desktop/MIRAN/myprojects/Macbeth/src/main.jsx",
  lineNumber: 35,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "/Users/miranraznatovic/Desktop/MIRAN/myprojects/Macbeth/src/main.jsx",
  lineNumber: 34,
  columnNumber: 7
}, this) }, void 0, false, {
  fileName: "/Users/miranraznatovic/Desktop/MIRAN/myprojects/Macbeth/src/main.jsx",
  lineNumber: 33,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "/Users/miranraznatovic/Desktop/MIRAN/myprojects/Macbeth/src/main.jsx",
  lineNumber: 32,
  columnNumber: 52
}, this));
var _c;
$RefreshReg$(_c, "AppWithTheme");
if (import.meta.hot) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/miranraznatovic/Desktop/MIRAN/myprojects/Macbeth/src/main.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBMEJROzs7Ozs7Ozs7Ozs7Ozs7O0FBMUJSLE9BQU9BLFNBQVNDLFVBQVVDLGlCQUFpQjtBQUMzQyxTQUFTQyxrQkFBa0I7QUFDM0IsU0FBU0MsdUJBQXVCO0FBQ2hDLE9BQU9DLG9CQUFvQjtBQUMzQixPQUFPQyxTQUFTO0FBQ2hCLFNBQVNDLFVBQVVDLG1CQUFtQjtBQUN0QyxTQUFTQyxlQUFlQyxtQkFBbUI7QUFDM0MsT0FBT0MsV0FBVztBQUNsQixPQUFPQyxlQUFlO0FBQ3RCLE9BQU9DLGdCQUFnQjtBQUN2QixPQUFPO0FBRVAsTUFBTUMsT0FBT1QsZUFBZTtBQUU1QixNQUFNVSxlQUFlQSxNQUFNO0FBQUFDLEtBQUE7QUFDekIsUUFBTUMsWUFBWVQsWUFBYVUsV0FBVUEsTUFBTUMsTUFBTUYsU0FBUztBQUM5RCxRQUFNRSxRQUFRVCxZQUFZTyxZQUFZSixhQUFhRCxTQUFTO0FBQzVELFFBQU0sQ0FBQ1EsZ0JBQWdCQyxpQkFBaUIsSUFBSXBCLFNBQVMsS0FBSztBQUUxREMsWUFBVSxNQUFNO0FBQ2RtQixzQkFBa0IsSUFBSTtBQUFBLEVBQ3hCLEdBQUcsRUFBRTtBQUVMLFNBQ0UsdUJBQUMsU0FBSSxXQUFZLGNBQWFELGlCQUFpQixTQUFTLE1BQ3RELGlDQUFDLGlCQUFjLE9BQ2IsaUNBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUksS0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUE7QUFFSjtBQUFFSixHQWhCSUQsY0FBWTtBQUFBLFVBQ0VQLFdBQVc7QUFBQTtBQUFBYyxLQUR6QlA7QUFrQk5aLFdBQVdvQixTQUFTQyxlQUFlLE1BQU0sQ0FBQyxFQUFFQyxPQUMxQyx1QkFBQyxNQUFNLFlBQU4sRUFDQyxpQ0FBQyxZQUFTLE9BQ1IsaUNBQUMsbUJBQWdCLE1BQ2YsaUNBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFhLEtBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlBLEtBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1BLENBQ0Y7QUFBRSxJQUFBSDtBQUFBSSxhQUFBSixJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJJMThuZXh0UHJvdmlkZXIiLCJpbml0aWFsaXplSTE4biIsIkFwcCIsIlByb3ZpZGVyIiwidXNlU2VsZWN0b3IiLCJUaGVtZVByb3ZpZGVyIiwiY3JlYXRlVGhlbWUiLCJzdG9yZSIsImRhcmtUaGVtZSIsImxpZ2h0VGhlbWUiLCJpMThuIiwiQXBwV2l0aFRoZW1lIiwiX3MiLCJ0aGVtZU1vZGUiLCJzdGF0ZSIsInRoZW1lIiwic2hvd1RyYW5zaXRpb24iLCJzZXRTaG93VHJhbnNpdGlvbiIsIl9jIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sImZpbGUiOiIvVXNlcnMvbWlyYW5yYXpuYXRvdmljL0Rlc2t0b3AvTUlSQU4vbXlwcm9qZWN0cy9NYWNiZXRoL3NyYy9tYWluLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IEkxOG5leHRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgaW5pdGlhbGl6ZUkxOG4gZnJvbSBcIi4vbG9jYWxlcy9pMThuLmpzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwLmpzeFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgZGFya1RoZW1lIGZyb20gXCIuL3RoZW1lL0RhcmtUaGVtZVwiO1xuaW1wb3J0IGxpZ2h0VGhlbWUgZnJvbSBcIi4vdGhlbWUvTGlnaHRUaGVtZVwiO1xuaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xuXG5jb25zdCBpMThuID0gaW5pdGlhbGl6ZUkxOG4oKTtcblxuY29uc3QgQXBwV2l0aFRoZW1lID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZU1vZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRoZW1lLnRoZW1lTW9kZSk7XG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUodGhlbWVNb2RlID8gbGlnaHRUaGVtZSA6IGRhcmtUaGVtZSk7XG4gIGNvbnN0IFtzaG93VHJhbnNpdGlvbiwgc2V0U2hvd1RyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2hvd1RyYW5zaXRpb24odHJ1ZSk7IC8vIEFjdGl2YXRlIHRoZSB0cmFuc2l0aW9uIG9uIGNvbXBvbmVudCBtb3VudFxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHRyYW5zaXRpb24gJHtzaG93VHJhbnNpdGlvbiA/IFwic2hvd1wiIDogXCJcIn1gfT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxBcHAgLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEkxOG5leHRQcm92aWRlciBpMThuPXtpMThufT5cbiAgICAgICAgPEFwcFdpdGhUaGVtZSAvPlxuICAgICAgPC9JMThuZXh0UHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiJdfQ==