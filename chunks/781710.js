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
var r = a(627968),
    n = a(64700),
    i = a(139033),
    l = a(224640),
    s = a(20742),
    o = a(430993),
    c = a(696208),
    u = a(629584),
    d = a(834730),
    f = a(192308),
    h = a(821609),
    p = a(77729),
    b = a(231545),
    x = a(140791);
let m = [
        { name: "View", value: "view" },
        { name: "Edit", value: "edit" },
    ],
    y = [117, 117, 105, 100];
async function A(e) {
    let { default: t } = await a.e("25777").then(a.t.bind(a, 293384, 19)),
        r = t.createFile(!1),
        n = new Promise((e, t) => {
            (r.onReady = e), (r.onError = (e) => t(Error(e)));
        }),
        i = e.slice(0);
    if (((i.fileStart = 0), r.appendBuffer(i), r.flush(), await n, null == r.boxes)) return null;
    for (let e of r.boxes) {
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
function E(e) {
    let {
            filename: t,
            initialJson: a,
            fileBuffer: i,
            boxStart: f,
            boxSize: h,
            hdrSize: p,
            transitionState: A,
            onClose: E,
        } = e,
        v = n.useRef(null),
        [w, S] = n.useState("view"),
        [g, C] = n.useState(() => JSON.parse(a)),
        [N, T] = n.useState(!1),
        [j, O] = n.useState(null);
    return (0, r.jsxs)(l.d, {
        transitionState: A,
        onClose: E,
        size: "xl",
        "aria-label": "Clip metadata",
        children: [
            (0, r.jsx)(s.rQ, { title: "Clip metadata", subtitle: t }),
            (0, r.jsxs)(o.c, {
                controls: (0, r.jsx)(u.I, {
                    className: x.Ei,
                    options: m,
                    value: w,
                    onChange: (e) =>
                        ((e) => {
                            if ("view" === e) {
                                let e = v.current?.value ?? a;
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
                    (0, r.jsx)("textarea", {
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        autoComplete: "off",
                        spellCheck: "false",
                        ref: v,
                        defaultValue: a,
                        onInput: N ? void 0 : () => T(!0),
                        onChange: null != j ? () => O(null) : void 0,
                        rows: 20,
                        "aria-label": "Clip metadata JSON",
                        "aria-hidden": "edit" !== w,
                        className: "edit" === w ? x.jX : x.R,
                    }),
                    "view" === w && (0, r.jsx)(b.A, { data: g }),
                    null != j &&
                        (0, r.jsx)(d.E, { variant: "text-sm/medium", color: "text-feedback-critical", children: j }),
                ],
            }),
            (0, r.jsx)(c.H, {
                actionsFullWidth: !0,
                actions:
                    "view" === w
                        ? [{ text: "Close", onClick: E, variant: "primary" }]
                        : [
                              { text: "Cancel", onClick: E, variant: "secondary" },
                              {
                                  text: "Save as...",
                                  onClick: () => {
                                      let e,
                                          a = v.current?.value ?? "";
                                      try {
                                          e = JSON.parse(a);
                                      } catch (e) {
                                          O(e instanceof Error ? e.message : String(e));
                                          return;
                                      }
                                      try {
                                          var r;
                                          let a,
                                              n,
                                              l = JSON.stringify(e),
                                              s = new TextEncoder().encode(l),
                                              o = (function (e, t, a, r, n) {
                                                  let i = r + n.length;
                                                  if (i > 0xffffffff)
                                                      throw Error(
                                                          "New uuid box exceeds 32-bit size; extended size encoding not implemented",
                                                      );
                                                  let l = new Uint8Array(i);
                                                  new DataView(l.buffer).setUint32(0, i, !1),
                                                      l.set(y, 4),
                                                      l.set(new Uint8Array(e, t + 8, r - 8), 8),
                                                      l.set(n, r);
                                                  let s = new Uint8Array(e, 0, t),
                                                      o = new Uint8Array(e, t + a),
                                                      c = new Uint8Array(s.length + l.length + o.length);
                                                  return (
                                                      c.set(s, 0),
                                                      c.set(l, s.length),
                                                      c.set(o, s.length + l.length),
                                                      c.buffer
                                                  );
                                              })(i, f, h, p, s);
                                          (r = new Blob([o], { type: "video/mp4" })),
                                              (a = URL.createObjectURL(r)),
                                              ((n = document.createElement("a")).href = a),
                                              (n.download = t),
                                              n.click(),
                                              URL.revokeObjectURL(a),
                                              E();
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
async function v(e, t) {
    try {
        let a = await A(e);
        if (null == a)
            return void (0, i.A)({ title: "No metadata found", subtitle: `No clip metadata UUID box found in ${t}` });
        let n = JSON.stringify(a.metadata, null, 2);
        (0, f.openModal)((i) =>
            (0, r.jsx)(E, {
                ...i,
                filename: t,
                initialJson: n,
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
    await v(t, e.name);
}
async function S(e) {
    try {
        let { data: t, filename: a } = await p.A.clips.loadClip(e),
            r = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
        await v(r, a);
    } catch (e) {
        (0, i.A)({ title: "Failed to load clip", subtitle: e instanceof Error ? e.message : String(e) });
    }
}
function g() {
    let e = n.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("input", {
                ref: e,
                type: "file",
                accept: "video/mp4,.mp4",
                onChange: (e) => {
                    let t = e.target.files?.[0];
                    (e.target.value = ""), null != t && w(t);
                },
                className: x.Z_,
            }),
            (0, r.jsx)(h.$, { text: "Open File", onClick: () => e.current?.click() }),
        ],
    });
}
