(i.r(r), i.d(r, { CpfOcr: () => p }));
var t = i(768611),
    a = i(200503),
    s = i(242268),
    n = i(326144),
    c = i(538553);
i(540937);
var l = i(264957),
    u = i(503679),
    d = i(936391),
    o = i(581736),
    p = ({ manager: e, onFinish: r, onError: i }) => {
        let [p, f] = (0, a.u)(() => e ?? (0, o.createCpfOcrManager)(), { manageLifecycle: !e }),
            [v, h] = (0, t.p)(!1),
            [C, g] = (0, t.p)(!1),
            [m, b] = (0, t.p)(!1);
        if (
            ((0, a.c)({ status: "finished" === p.status ? "finished" : "loading", onFinish: r }),
            (0, t._)(() => {
                "error" === p.status && i?.(p.error);
            }, [p, i]),
            "idle" === p.status || "loading" === p.status || "submitting" === p.status)
        )
            return (0, t.v)(n.t, {
                className: "IncodeCpfOcrPage",
                children: (0, t.v)("div", {
                    class: "IncodeCpfOcrLoading",
                    children: (0, t.v)(c.t, { fullScreen: !1 }),
                }),
            });
        if ("error" === p.status)
            return (0, t.v)(u.t, {
                status: "failure",
                failureTitle: "N\xe3o foi poss\xedvel verificar o CPF",
                onRetry: () => f.retry(),
            });
        if ("finished" === p.status) return null;
        let I = "inputting" === p.status ? { cpf: p.cpf, isValid: p.isValid } : { cpf: "", isValid: !1 },
            P = 11 === I.cpf.replace(/\D/g, "").length,
            F = C && !I.isValid && (P || (v && !m)) ? "Insira um CPF v\xe1lido" : void 0;
        return (0, t.v)(n.t, {
            className: "IncodeCpfOcrPage",
            title: "Insira e verifique o n\xfamero do seu CPF",
            children: (0, t.v)("div", {
                class: "IncodeCpfOcr",
                children: [
                    (0, t.v)(s.r, { size: 32 }),
                    (0, t.v)(d.t, {
                        id: "cpf-ocr-input",
                        label: "",
                        value: I.cpf,
                        placeholder: "Seu CPF",
                        maxLength: 14,
                        inputMode: "numeric",
                        "aria-label": "CPF",
                        onInput: (e) => {
                            (g(!0), f.setCpf(e.target.value));
                        },
                        onFocus: () => {
                            b(!0);
                        },
                        onBlur: () => {
                            (b(!1), h(!0));
                        },
                        error: F,
                        showErrorIcon: !0,
                    }),
                    (0, t.v)(s.r, {}),
                    (0, t.v)(l.t, {
                        type: "button",
                        onClick: () => f.submit(),
                        disabled: !I.isValid,
                        "data-testid": "cpf-ocr-continue",
                        children: "Continuar",
                    }),
                ],
            }),
        });
    };
