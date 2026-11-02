import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { M as t, T as n, c as r, s as i } from "./react.BDb-TZZO.mjs";
import { J as a, k as o, o as s } from "./framer.Bi3K3xOo.mjs";
function c(e) {
  let { svgCode: n, color: r, stroke: a, strokeColor: o, style: s } = e,
    c = t(() => {
      if (!n) return ``;
      let e = n.trim();
      return (
        e.startsWith(`<svg`) &&
          ((e = e.replace(/fill="[^"]*"/g, `fill="${r}"`)),
          (e = a
            ? e.replace(/stroke="[^"]*"/g, `stroke="${o}"`)
            : e.replace(/\sstroke="[^"]*"/g, ``)),
          a && !e.includes(`stroke=`) && (e = e.replace(`<svg`, `<svg stroke="${o}"`)),
          !e.includes(`fill=`) &&
            !e.includes(`stroke=`) &&
            (e = e.replace(`<svg`, `<svg fill="${r}"`)),
          (e = e.replace(/width="[^"]*"/, `width="100%"`)),
          (e = e.replace(/height="[^"]*"/, `height="100%"`)),
          e.includes(`width=`) || (e = e.replace(`<svg`, `<svg width="100%"`)),
          e.includes(`height=`) || (e = e.replace(`<svg`, `<svg height="100%"`))),
        e
      );
    }, [n, r, a, o]);
  return i(`div`, {
    style: {
      width: `100%`,
      height: `100%`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      position: `relative`,
      ...s,
    },
    dangerouslySetInnerHTML: { __html: c },
  });
}
var l = e(() => {
  (r(),
    a(),
    n(),
    o(c, {
      svgCode: {
        type: s.String,
        title: `SVG Code`,
        displayTextArea: !0,
        defaultValue: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>`,
      },
      color: { type: s.Color, title: `Color`, defaultValue: `#000000` },
      stroke: {
        type: s.Boolean,
        title: `Stroke`,
        defaultValue: !1,
        enabledTitle: `Yes`,
        disabledTitle: `No`,
      },
      strokeColor: {
        type: s.Color,
        title: `Stroke Color`,
        defaultValue: `#000000`,
        hidden: ({ stroke: e }) => !e,
      },
    }));
});
export { l as n, c as t };
//# sourceMappingURL=SVGComponent.CcbG4JSa.mjs.map
