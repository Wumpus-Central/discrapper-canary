t.d(n, { A: () => a }), t(321073);
var l = t(64700),
    i = t(417597),
    s = t(591552);
function a(e) {
    let n = (0, i.yK)([s.A], () => s.A.getEnabledOnboardingPrompts(e));
    return l.useMemo(() => {
        let e = 0,
            t = [],
            l = [],
            i = [],
            s = [];
        for (var a = 0; a < n.length; a++) {
            let r = n[a];
            r.isNew
                ? t.push(r)
                : r.hasNewAnswers
                  ? (l.push(r), (e += r.options.filter((e) => e.isUnseen).length))
                  : r.inOnboarding
                    ? s.push(r)
                    : i.push(r);
        }
        return {
            onboardingPromptsRaw: n,
            newOnboardingPrompts: t,
            onboardingPromptsWithNewAnswers: l,
            newAnswersCount: e,
            onboardingPrompts: i.concat(s),
        };
    }, [n]);
}
