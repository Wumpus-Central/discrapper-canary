n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(311907),
    o = n(990078),
    d = n(243721),
    c = n(834730),
    u = n(821609),
    h = n(964486),
    m = n(706712),
    p = n(142120),
    g = n(87001),
    f = n(302614),
    _ = n(321090),
    x = n(392164),
    A = n(548934);
function E(e) {
    let { locked: t, pinned: n, anchorLeft: a } = e,
        E = (0, l.bG)([p.A], () => p.A.getSocket()),
        S = (0, l.bG)([_.A], () => _.A.isGPUBoosted());
    (0, m.ZX)();
    let I = (0, l.bG)([g.A], () => g.A.getWindow(x.f)),
        [v, b] = (0, m.DQ)(E),
        {
            currentFPS: C,
            averageFrameTime: T,
            timeSinceLastDrop: j,
            onResetFrameData: y,
            droppedFramesRef: w,
            renderedFrameCount: N,
            bufferFramecountRef: R,
            frameCheckerEffect: M,
        } = (0, m.Dj)(!0, v, !0),
        [O, k, D] = (0, m.F5)(E),
        [z, P] = (0, m.km)(O, M, I),
        L = performance.now() - b.current < m.Jc,
        V = k(T, R.current);
    (0, h.Ay)(
        () => (
            z(),
            () => {
                P();
            }
        ),
    );
    let G = r.useCallback(() => {
            y(), D(), z();
        }, [y, D, z]),
        [U, H] = r.useState(!0),
        [F, W] = r.useState(!0),
        [Z, Y] = r.useState(!0),
        [X, B] = r.useState(!0),
        [K, q] = r.useState(!0);
    return t && !n
        ? null
        : (0, i.jsxs)("div", {
              className: s()(A.st, !a && A.Hk),
              children: [
                  (U || !t) &&
                      (0, i.jsxs)("div", {
                          className: A.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: A.On,
                                      children: (0, i.jsx)(d.d, { checked: U, onChange: (e) => H(e) }),
                                  }),
                              (0, i.jsxs)(c.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: A.e0,
                                  children: [
                                      "FPS:",
                                      " ",
                                      (0, i.jsx)(c.E, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              C < 30
                                                  ? "text-feedback-critical"
                                                  : C < 45
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: C.toFixed(2),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (F || !t) &&
                      (0, i.jsxs)("div", {
                          className: A.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: A.On,
                                      children: (0, i.jsx)(d.d, { checked: F, onChange: (e) => W(e) }),
                                  }),
                              (0, i.jsxs)(c.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: A.e0,
                                  children: [
                                      "Frame Times:",
                                      " ",
                                      (0, i.jsxs)(c.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: T > 1.1 * m.L6 ? "text-feedback-warning" : "text-strong",
                                          children: [T.toFixed(2), "ms"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (Z || !t) &&
                      (0, i.jsxs)("div", {
                          className: A.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: A.On,
                                      children: (0, i.jsx)(d.d, { checked: Z, onChange: (e) => Y(e) }),
                                  }),
                              (0, i.jsxs)(c.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: A.e0,
                                  children: [
                                      "Dropped Frames:",
                                      " ",
                                      (0, i.jsx)(c.E, {
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
                                      (0, i.jsxs)(c.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-subtle",
                                          className: A.af,
                                          children: ["(", ((w.current / N.current) * 100).toFixed(3), "%)"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (X || !t) &&
                      (0, i.jsxs)("div", {
                          className: A.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: A.On,
                                      children: (0, i.jsx)(d.d, { checked: X, onChange: (e) => B(e) }),
                                  }),
                              (0, i.jsxs)(c.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: A.e0,
                                  children: [
                                      "Rendered Frames:",
                                      " ",
                                      (0, i.jsx)(c.E, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-strong",
                                          children: N.current.toFixed(0),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (K || !t) &&
                      (0, i.jsxs)("div", {
                          className: A.PG,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: A.On,
                                      children: (0, i.jsx)(d.d, { checked: K, onChange: (e) => q(e) }),
                                  }),
                              (0, i.jsx)(o.m, {
                                  position: "left",
                                  text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                                  children: (0, i.jsx)("div", {
                                      children: (0, i.jsxs)(c.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          className: A.e0,
                                          children: [
                                              "Idle Frame Delta:",
                                              " ",
                                              (0, i.jsxs)(c.E, {
                                                  tag: "span",
                                                  variant: "code",
                                                  color: V > 1 ? "text-feedback-critical" : "text-strong",
                                                  children: [V.toFixed(2), "ms"],
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                          ],
                      }),
                  L &&
                      (0, i.jsx)(o.m, {
                          position: "left",
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (0, i.jsx)("span", {
                              children: (0, i.jsx)(c.E, {
                                  tag: "span",
                                  variant: "code",
                                  color: "text-feedback-critical",
                                  children: "(Main App Backgrounded)",
                              }),
                          }),
                      }),
                  S &&
                      (0, i.jsx)(c.E, {
                          tag: "span",
                          variant: "code",
                          color: "text-feedback-positive",
                          children: "(Using GPU Priority - Realtime)",
                      }),
                  !t &&
                      (0, i.jsx)("div", {
                          className: A.m8,
                          children: (0, i.jsx)(f.A, {
                              children: (0, i.jsx)(u.$, { variant: "primary", text: "Reset Frame Data", onClick: G }),
                          }),
                      }),
              ],
          });
}
