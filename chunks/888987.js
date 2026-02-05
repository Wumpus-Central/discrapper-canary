n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(990078),
    d = n(397927),
    u = n(964486),
    c = n(706712),
    h = n(142120),
    A = n(87001),
    m = n(302614),
    g = n(321090),
    p = n(392164),
    f = n(621720);
function _(e) {
    let { locked: t, pinned: n, anchorLeft: a } = e,
        _ = (0, r.bG)([h.A], () => h.A.getSocket()),
        E = (0, r.bG)([g.A], () => g.A.isGPUBoosted());
    (0, c.ZX)();
    let x = (0, r.bG)([A.A], () => A.A.getWindow(p.f)),
        [S, I] = (0, c.DQ)(_),
        {
            currentFPS: T,
            averageFrameTime: C,
            timeSinceLastDrop: v,
            onResetFrameData: y,
            droppedFramesRef: N,
            renderedFrameCount: O,
            bufferFramecountRef: b,
            frameCheckerEffect: j,
        } = (0, c.Dj)(!0, S, !0),
        [w, L, R] = (0, c.F5)(_),
        [D, M] = (0, c.km)(w, j, x),
        k = performance.now() - I.current < c.Jc,
        z = L(C, b.current);
    (0, u.Ay)(
        () => (
            D(),
            () => {
                M();
            }
        ),
    );
    let V = l.useCallback(() => {
            y(), R(), D();
        }, [y, R, D]),
        [U, P] = l.useState(!0),
        [G, H] = l.useState(!0),
        [Y, F] = l.useState(!0),
        [W, K] = l.useState(!0),
        [Z, B] = l.useState(!0);
    return t && !n
        ? null
        : (0, i.jsxs)("div", {
              className: s()(f.st, !a && f.Hk),
              children: [
                  (U || !t) &&
                      (0, i.jsxs)("div", {
                          className: f.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: f.On,
                                      children: (0, i.jsx)(d.dOG, { checked: U, onChange: (e) => P(e) }),
                                  }),
                              (0, i.jsxs)(d.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: f.e0,
                                  children: [
                                      "FPS:",
                                      " ",
                                      (0, i.jsx)(d.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              T < 30
                                                  ? "text-feedback-critical"
                                                  : T < 45
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: T.toFixed(2),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (G || !t) &&
                      (0, i.jsxs)("div", {
                          className: f.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: f.On,
                                      children: (0, i.jsx)(d.dOG, { checked: G, onChange: (e) => H(e) }),
                                  }),
                              (0, i.jsxs)(d.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: f.e0,
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
                          className: f.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: f.On,
                                      children: (0, i.jsx)(d.dOG, { checked: Y, onChange: (e) => F(e) }),
                                  }),
                              (0, i.jsxs)(d.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: f.e0,
                                  children: [
                                      "Dropped Frames:",
                                      " ",
                                      (0, i.jsx)(d.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              v < 2
                                                  ? "text-feedback-critical"
                                                  : v < 5
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: N.current,
                                      }),
                                      (0, i.jsxs)(d.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-subtle",
                                          className: f.af,
                                          children: ["(", ((N.current / O.current) * 100).toFixed(3), "%)"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (W || !t) &&
                      (0, i.jsxs)("div", {
                          className: f.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: f.On,
                                      children: (0, i.jsx)(d.dOG, { checked: W, onChange: (e) => K(e) }),
                                  }),
                              (0, i.jsxs)(d.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: f.e0,
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
                  (Z || !t) &&
                      (0, i.jsxs)("div", {
                          className: f.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: f.On,
                                      children: (0, i.jsx)(d.dOG, { checked: Z, onChange: (e) => B(e) }),
                                  }),
                              (0, i.jsx)(o.m, {
                                  position: "left",
                                  text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                                  children: (0, i.jsx)("div", {
                                      children: (0, i.jsxs)(d.Text, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          className: f.e0,
                                          children: [
                                              "Idle Frame Delta:",
                                              " ",
                                              (0, i.jsxs)(d.Text, {
                                                  tag: "span",
                                                  variant: "code",
                                                  color: z > 1 ? "text-feedback-critical" : "text-strong",
                                                  children: [z.toFixed(2), "ms"],
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                          ],
                      }),
                  k &&
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
                  E &&
                      (0, i.jsx)(d.Text, {
                          tag: "span",
                          variant: "code",
                          color: "text-feedback-positive",
                          children: "(Using GPU Priority - Realtime)",
                      }),
                  !t &&
                      (0, i.jsx)("div", {
                          className: f.m8,
                          children: (0, i.jsx)(m.A, {
                              children: (0, i.jsx)(d.Button, {
                                  variant: "primary",
                                  text: "Reset Frame Data",
                                  onClick: V,
                              }),
                          }),
                      }),
              ],
          });
}
