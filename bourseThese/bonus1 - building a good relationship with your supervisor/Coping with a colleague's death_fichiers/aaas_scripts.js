function toggleList(listName) {
	toggleElement($(listName + 'ItemList'), $('recentItemList', 'activeItemList', 'openItemList'));
	toggleStyle($(listName + 'ListLink'), $('recentListLink', 'activeListLink', 'openListLink'), 'active');
}

function approvearticle(doi,catpath) {
//alert(docpath + "  " + catpath);
document.frmArt.action = "approvearticle.xqy?doi="+doi+"&art_type="+catpath;
document.frmArt.method = "POST";
//alert(document.frmArt.action);
document.frmArt.submit();
}
function unapprovearticle(docpath,catpath) {
//alert(docpath + "  " + catpath);
document.frmArt.action = "unapprovearticle.xqy?doi="+doi+"&art_type="+catpath;
document.frmArt.method = "POST";
//alert(document.frmArt.action);
document.frmArt.submit();
}

function printarticle(doi,issue) {
    window.open("/career_magazine/previous_issues/articles/" + issue + "/" + doi + "/print_this_article");
}