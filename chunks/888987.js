n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    d = n(397927),
    u = n(964486),
    c = n(706712),
    h = n(142120),
    g = n(87001),
    m = n(302614),
    p = n(321090),
    A = n(392164),
    x = n(165366);
function E(e) {
    let { locked: t, pinned: n, anchorLeft: l } = e,
        E = (0, a.bG)([h.A], () => h.A.getSocket()),
        f = (0, a.bG)([p.A], () => p.A.isGPUBoosted());
    (0, c.ZX)();
    let S = (0, a.bG)([g.A], () => g.A.getWindow(A.f)),
        [I, T] = (0, c.DQ)(E),
        {
            currentFPS: v,
            averageFrameTime: C,
            timeSinceLastDrop: j,
            onResetFrameData: y,
            droppedFramesRef: w,
            renderedFrameCount: O,
            bufferFramecountRef: _,
            frameCheckerEffect: N,
        } = (0, c.Dj)(!0, I, !0),
        [b, R, M] = (0, c.F5)(E),
        [L, z] = (0, c.km)(b, N, S),
        D = performance.now() - T.current < c.Jc,
        k = R(C, _.current);
    (0, u.Ay)(
        () => (
            L(),
            () => {
                z();
            }
        ),
    );
    let P = s.useCallback(() => {
            y(), M(), L();
        }, [y, M, L]),
        [G, V] = s.useState(!0),
        [U, H] = s.useState(!0),
        [Y, Z] = s.useState(!0),
        [W, X] = s.useState(!0),
        [F, K] = s.useState(!0);
    return t && !n
        ? null
        : (0, i.jsxs)("div", {
              className: r()(x.st, !l && x.Hk),
              children: [
                  (G || !t) &&
                      (0, i.jsxs)("div", {
                          className: x.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: x.On,
                                      children: (0, i.jsx)(d.dOG, { checked: G, onChange: (e) => V(e) }),
                                  }),
                              (0, i.jsxs)(d.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: x.e0,
                                  children: [
                                      "FPS:",
                                      " ",
                                      (0, i.jsx)(d.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              v < 30
                                                  ? "text-feedback-critical"
                                                  : v < 45
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: v.toFixed(2),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (U || !t) &&
                      (0, i.jsxs)("div", {
                          className: x.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: x.On,
                                      children: (0, i.jsx)(d.dOG, { checked: U, onChange: (e) => H(e) }),
                                  }),
                              (0, i.jsxs)(d.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: x.e0,
                                  children: [
                                      "Frame Times:",
                                      " ",
                                      (0, i.jsxs)(d.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: C > 1.1 * c.L6 ? "text-feedback-warning" : "text-strong",
                                          children: [C.toFixed(2), "ms"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (Y || !t) &&
                      (0, i.jsxs)("div", {
                          className: x.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: x.On,
                                      children: (0, i.jsx)(d.dOG, { checked: Y, onChange: (e) => Z(e) }),
                                  }),
                              (0, i.jsxs)(d.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: x.e0,
                                  children: [
                                      "Dropped Frames:",
                                      " ",
                                      (0, i.jsx)(d.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              j < 2
                                                  ? "text-feedback-critical"
                                                  : j < 5
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: w.current,
                                      }),
                                      (0, i.jsxs)(d.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-subtle",
                                          className: x.af,
                                          children: ["(", ((w.current / O.current) * 100).toFixed(3), "%)"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (W || !t) &&
                      (0, i.jsxs)("div", {
                          className: x.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: x.On,
                                      children: (0, i.jsx)(d.dOG, { checked: W, onChange: (e) => X(e) }),
                                  }),
                              (0, i.jsxs)(d.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: x.e0,
                                  children: [
                                      "Rendered Frames:",
                                      " ",
                                      (0, i.jsx)(d.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-strong",
                                          children: O.current.toFixed(0),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (F || !t) &&
                      (0, i.jsxs)("div", {
                          className: x.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: x.On,
                                      children: (0, i.jsx)(d.dOG, { checked: F, onChange: (e) => K(e) }),
                                  }),
                              (0, i.jsx)(o.m, {
                                  position: "left",
                                  text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                                  children: (0, i.jsx)("div", {
                                      children: (0, i.jsxs)(d.Text, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          className: x.e0,
                                          children: [
                                              "Idle Frame Delta:",
                                              " ",
                                              (0, i.jsxs)(d.Text, {
                                                  tag: "span",
                                                  variant: "code",
                                                  color: k > 1 ? "text-feedback-critical" : "text-strong",
                                                  children: [k.toFixed(2), "ms"],
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                          ],
                      }),
                  D &&
                      (0, i.jsx)(o.m, {
                          position: "left",
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (0, i.jsx)("span", {
                              children: (0, i.jsx)(d.Text, {
                                  tag: "span",
                                  variant: "code",
                                  color: "text-feedback-critical",
                                  children: "(Main App Backgrounded)",
                              }),
                          }),
                      }),
                  f &&
                      (0, i.jsx)(d.Text, {
                          tag: "span",
                          variant: "code",
                          color: "text-feedback-positive",
                          children: "(Using GPU Priority - Realtime)",
                      }),
                  !t &&
                      (0, i.jsx)("div", {
                          className: x.m8,
                          children: (0, i.jsx)(m.A, {
                              children: (0, i.jsx)(d.Button, {
                                  variant: "primary",
                                  text: "Reset Frame Data",
                                  onClick: P,
                              }),
                          }),
                      }),
              ],
          });
}
