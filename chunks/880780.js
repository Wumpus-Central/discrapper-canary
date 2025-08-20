n.d(t, { v: () => i });
var r = n(748245);
function i(e) {
    return {
        keyboardProps: e.isDisabled
            ? {}
            : {
                  onKeyDown: (0, r.x)(e.onKeyDown),
                  onKeyUp: (0, r.x)(e.onKeyUp),
              },
    };
}
