n.d(t, { K: () => R, default: () => d });
var i = n(627968),
    l = n(64700),
    r = n(189213),
    s = n(17928),
    a = n(192308),
    E = n(834730),
    _ = n(27620),
    o = n(668131),
    A = n(797632),
    c = n(468035),
    T = n(198778),
    I = n(985018),
    N = n(772954);
function u(e) {
    let { surveyId: t, survey: n, onClose: s, transitionState: A } = e,
        { getSurveyResponses: u, setResponse: R, trackDisplayedQuestions: d } = (0, o.i)(),
        O = u(t),
        P = (0, c.i)(n),
        [C, S] = l.useState(P.blockId),
        [M, D] = l.useState(P.pageIndex),
        [m, p] = l.useState(!1),
        U = (e, n) => {
            R(t, e, n);
        },
        k = l.useCallback(
            () => (
                m
                    ? s()
                    : (0, a.openModal)((e) =>
                          (0, i.jsx)(r.Modal, {
                              title: I.intl.string(I.t.T9Sx3z),
                              actions: [
                                  { variant: "secondary", text: I.intl.string(I.t.oEAioF), onClick: e.onClose },
                                  {
                                      variant: "critical-primary",
                                      text: I.intl.string(I.t.p89ACt),
                                      onClick: () => {
                                          e.onClose(), s();
                                      },
                                  },
                              ],
                              ...e,
                              children: (0, i.jsx)(E.E, {
                                  variant: "text-md/normal",
                                  children: I.intl.string(I.t.iCK6G0),
                              }),
                          }),
                      ),
                Promise.resolve()
            ),
            [s, m],
        ),
        g = l.useMemo(() => (null == C ? [] : (0, c.uy)(n, { blockId: C, pageIndex: M, responses: O })), [n, C, M, O]),
        f = l.useCallback(() => {
            if (null == n || null == C) return;
            let e = (0, c.vt)(n, { blockId: C, pageIndex: M, responses: O });
            d(t, g), e.isComplete && _.Ay.submitSurveyResponse(t, O), S(e.blockId), D(e.pageIndex), p(e.isComplete);
        }, [n, C, M, O, t, g, d]);
    l.useEffect(() => {
        0 === g.length && f();
    }, [g, f]);
    let y = l.useMemo(() => {
        if (m) return !1;
        for (let e of g) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = O[e];
                if (null == t || "" === t.trim()) return !1;
            }
        }
        return !0;
    }, [m, g, n, O]);
    return m
        ? (0, i.jsxs)(r.Modal, {
              transitionState: A,
              onClose: s,
              size: "md",
              title: I.intl.string(I.t.OSqLUF),
              actions: [{ variant: "primary", text: I.intl.string(I.t.i4jeWR), onClick: s }],
              children: [
                  (0, i.jsx)(E.E, { variant: "text-md/normal", children: I.intl.string(I.t["2scvdw"]) }),
                  (0, i.jsx)(E.E, { variant: "text-md/normal", children: I.intl.string(I.t.chZxOD) }),
              ],
          })
        : (0, i.jsx)(r.Modal, {
              transitionState: A,
              onClose: k,
              title: I.intl.string(I.t.OSqLUF),
              size: "md",
              actions: [{ variant: "primary", text: I.intl.string(I.t.PDTjLN), onClick: f, disabled: !y }],
              children: (0, i.jsx)("div", {
                  style: { width: "100%" },
                  children:
                      0 === g.length
                          ? null
                          : (0, i.jsx)("div", {
                                className: N.Qs,
                                children: g.map((e) => {
                                    let t = n.Questions[e];
                                    return null == t
                                        ? null
                                        : (0, i.jsx)(
                                              T.A,
                                              { question: t, questionId: e, responses: O, onResponseChange: U },
                                              e,
                                          );
                                }),
                            }),
              }),
          });
}
async function R(e) {
    null != (await _.Ay.fetchSurveyDetails(e)) &&
        (o.i.getState().clearSurveyResponses(e),
        (0, a.openModalLazy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 814249));
                return (n) => (0, i.jsx)(t, { ...n, surveyId: e });
            },
            { onCloseRequest: () => {} },
        ));
}
function d(e) {
    let { surveyId: t, onClose: n, transitionState: l } = e,
        r = (0, s.bG)([A.A], () => A.A.getSurvey(t));
    return null == r
        ? (0, i.jsx)(E.E, { variant: "text-md/medium", className: N.Lq, children: I.intl.string(I.t.MKDeyL) })
        : (0, i.jsx)(u, { surveyId: t, survey: r, onClose: n, transitionState: l });
}
