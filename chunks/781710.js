a.d(t, { A: () => g, h: () => S }),
    a(393431),
    a(532706),
    a(42231),
    a(232424),
    a(949626),
    a(767709),
    a(65162),
    a(323874),
    a(14289),
    a(35956);
var n = a(627968),
    r = a(64700),
    i = a(139033),
    l = a(224640),
    s = a(20742),
    o = a(430993),
    c = a(696208),
    u = a(629584),
    f = a(834730),
    d = a(192308);
if (88245 != a.j) var h = a(821609);
var p = a(77729),
    b = a(231545),
    x = a(140791);
let m = [
        { name: "View", value: "view" },
        { name: "Edit", value: "edit" },
    ],
    v = [117, 117, 105, 100];
async function y(e) {
    let { default: t } = await a.e("25777").then(a.t.bind(a, 293384, 19)),
        n = t.createFile(!1),
        r = new Promise((e, t) => {
            (n.onReady = e), (n.onError = (e) => t(Error(e)));
        }),
        i = e.slice(0);
    if (((i.fileStart = 0), n.appendBuffer(i), n.flush(), await r, null == n.boxes)) return null;
    for (let e of n.boxes) {
        if ("uuid" !== e.type || "a1c8529933464db888f083f57a75a5ef" !== e.uuid) continue;
        let t = e.data;
        if (null == t) break;
        return {
            boxStart: e.start,
            boxSize: e.size,
            hdrSize: e.hdr_size,
            metadata: JSON.parse(new TextDecoder().decode(t)),
        };
    }
    return null;
}
function A(e) {
    let {
            filename: t,
            initialJson: a,
            fileBuffer: i,
            boxStart: d,
            boxSize: h,
            hdrSize: p,
            transitionState: y,
            onClose: A,
        } = e,
        E = r.useRef(null),
        [w, S] = r.useState("view"),
        [g, C] = r.useState(() => JSON.parse(a)),
        [N, T] = r.useState(!1),
        [j, O] = r.useState(null);
    return (0, n.jsxs)(l.d, {
        transitionState: y,
        onClose: A,
        size: "xl",
        "aria-label": "Clip metadata",
        children: [
            (0, n.jsx)(s.rQ, { title: "Clip metadata", subtitle: t }),
            (0, n.jsxs)(o.c, {
                controls: (0, n.jsx)(u.I, {
                    className: x.Ei,
                    options: m,
                    value: w,
                    onChange: (e) =>
                        (function (e) {
                            if ("view" === e) {
                                let e = E.current?.value ?? a;
                                try {
                                    C(JSON.parse(e));
                                } catch (e) {
                                    O(e instanceof Error ? e.message : String(e));
                                    return;
                                }
                            }
                            O(null), S(e);
                        })(e.value),
                }),
                children: [
                    (0, n.jsx)("textarea", {
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        autoComplete: "off",
                        spellCheck: "false",
                        ref: E,
                        defaultValue: a,
                        onInput: N ? void 0 : () => T(!0),
                        onChange: null != j ? () => O(null) : void 0,
                        rows: 20,
                        "aria-label": "Clip metadata JSON",
                        "aria-hidden": "edit" !== w,
                        className: "edit" === w ? x.jX : x.R,
                    }),
                    "view" === w && (0, n.jsx)(b.A, { data: g }),
                    null != j &&
                        (0, n.jsx)(f.E, { variant: "text-sm/medium", color: "text-feedback-critical", children: j }),
                ],
            }),
            (0, n.jsx)(c.H, {
                actionsFullWidth: !0,
                actions:
                    "view" === w
                        ? [{ text: "Close", onClick: A, variant: "primary" }]
                        : [
                              { text: "Cancel", onClick: A, variant: "secondary" },
                              {
                                  text: "Save as...",
                                  onClick: function () {
                                      let e,
                                          a = E.current?.value ?? "";
                                      try {
                                          e = JSON.parse(a);
                                      } catch (e) {
                                          O(e instanceof Error ? e.message : String(e));
                                          return;
                                      }
                                      try {
                                          var n;
                                          let a,
                                              r,
                                              l = JSON.stringify(e),
                                              s = new TextEncoder().encode(l),
                                              o = (function (e, t, a, n, r) {
                                                  let i = n + r.length;
                                                  if (i > 0xffffffff)
                                                      throw Error(
                                                          "New uuid box exceeds 32-bit size; extended size encoding not implemented",
                                                      );
                                                  let l = new Uint8Array(i);
                                                  new DataView(l.buffer).setUint32(0, i, !1),
                                                      l.set(v, 4),
                                                      l.set(new Uint8Array(e, t + 8, n - 8), 8),
                                                      l.set(r, n);
                                                  let s = new Uint8Array(e, 0, t),
                                                      o = new Uint8Array(e, t + a),
                                                      c = new Uint8Array(s.length + l.length + o.length);
                                                  return (
                                                      c.set(s, 0),
                                                      c.set(l, s.length),
                                                      c.set(o, s.length + l.length),
                                                      c.buffer
                                                  );
                                              })(i, d, h, p, s);
                                          (n = new Blob([o], { type: "video/mp4" })),
                                              (a = URL.createObjectURL(n)),
                                              ((r = document.createElement("a")).href = a),
                                              (r.download = t),
                                              r.click(),
                                              URL.revokeObjectURL(a),
                                              A();
                                      } catch (e) {
                                          O(e instanceof Error ? e.message : String(e));
                                      }
                                  },
                                  variant: "primary",
                                  disabled: !N,
                              },
                          ],
            }),
        ],
    });
}
async function E(e, t) {
    try {
        let a = await y(e);
        if (null == a)
            return void (0, i.A)({ title: "No metadata found", subtitle: `No clip metadata UUID box found in ${t}` });
        let r = JSON.stringify(a.metadata, null, 2);
        (0, d.openModal)((i) =>
            (0, n.jsx)(A, {
                ...i,
                filename: t,
                initialJson: r,
                fileBuffer: e,
                boxStart: a.boxStart,
                boxSize: a.boxSize,
                hdrSize: a.hdrSize,
            }),
        );
    } catch (e) {
        (0, i.A)({ title: "Failed to parse clip metadata", subtitle: e instanceof Error ? e.message : String(e) });
    }
}
async function w(e) {
    let t = await e.arrayBuffer();
    await E(t, e.name);
}
async function S(e) {
    try {
        let { data: t, filename: a } = await p.A.clips.loadClip(e),
            n = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
        await E(n, a);
    } catch (e) {
        (0, i.A)({ title: "Failed to load clip", subtitle: e instanceof Error ? e.message : String(e) });
    }
}
function g() {
    let e = r.useRef(null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("input", {
                ref: e,
                type: "file",
                accept: "video/mp4,.mp4",
                onChange: function (e) {
                    let t = e.target.files?.[0];
                    (e.target.value = ""), null != t && w(t);
                },
                className: x.Z_,
            }),
            (0, n.jsx)(h.$, { text: "Open File", onClick: () => e.current?.click() }),
        ],
    });
}
