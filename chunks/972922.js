"use strict";
n.d(t, { s: () => s });
var r = n(192734),
    i = n(201092),
    a = n(404903),
    o = n(126024);
function s(e, t) {
    let n,
        {
            elementType: s = "button",
            isDisabled: l,
            onPress: u,
            onPressStart: c,
            onPressEnd: d,
            onPressUp: f,
            onPressChange: p,
            preventFocusOnPress: h,
            allowFocusWhenDisabled: m,
            onClick: g,
            href: v,
            target: y,
            rel: b,
            type: _ = "button",
        } = e;
    n =
        "button" === s
            ? {
                  type: _,
                  disabled: l,
                  form: e.form,
                  formAction: e.formAction,
                  formEncType: e.formEncType,
                  formMethod: e.formMethod,
                  formNoValidate: e.formNoValidate,
                  formTarget: e.formTarget,
                  name: e.name,
                  value: e.value,
              }
            : {
                  role: "button",
                  href: "a" !== s || l ? void 0 : v,
                  target: "a" === s ? y : void 0,
                  type: "input" === s ? _ : void 0,
                  disabled: "input" === s ? l : void 0,
                  "aria-disabled": l && "input" !== s ? l : void 0,
                  rel: "a" === s ? b : void 0,
              };
    let { pressProps: w, isPressed: x } = (0, a.d)({
            onPressStart: c,
            onPressEnd: d,
            onPressChange: p,
            onPress: u,
            onPressUp: f,
            onClick: g,
            isDisabled: l,
            preventFocusOnPress: h,
            ref: t,
        }),
        { focusableProps: E } = (0, o.Wc)(e, t);
    m && (E.tabIndex = l ? -1 : E.tabIndex);
    let S = (0, r.v)(E, w, (0, i.$)(e, { labelable: !0 }));
    return {
        isPressed: x,
        buttonProps: (0, r.v)(n, S, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"],
        }),
    };
}
