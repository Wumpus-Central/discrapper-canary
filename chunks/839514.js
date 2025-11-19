n.d(t, { N: () => l });
let a = null;
function l() {
    if (null == a)
        try {
            a = new AudioContext();
        } catch (e) {}
    return a;
}
