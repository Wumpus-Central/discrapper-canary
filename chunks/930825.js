n.d(t, { Z: () => i });
var r = n(629821);
class i extends r._ {
    primaryPrefix() {
        return "(?:(?:ao?|às?|das|da|de|do)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|a(?:o)?|\\?)\\s*";
    }
}
