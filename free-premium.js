var article_paywall = document.getElementsByClassName('article-body--paywall');
var article_truncated = document.getElementsByClassName('article-body--truncated');
var paywall = document.getElementsByClassName('paywall');


for (var i = 0; i < article_paywall.length; i++) {
    article_paywall[i].classList = [];
}

for (var i = 0; i < article_truncated.length; i++) {
    article_truncated[i].classList = [];
}

for (var i = 0; i < paywall.length; i++) {
    paywall[i].remove();
}