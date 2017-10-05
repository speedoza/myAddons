// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
    debugger;

    //$(".ctl00_Navigation2_HyperLink1").click();
    setTimeout(function () {
        

        //$("input[type=submit]").click();
        $("input[name='username']").val("");
        $("input[type='password']").val("");
        document_root.getElementById('loginWidget').getElementsByTagName('input')[0].value = '98799';
        document_root.getElementById('loginWidget').getElementsByTagName('input')[1].value = 'dxb8324429';
        
        $("input[name='username']").attr("value", "98799");
        $("input[type='password']").attr("value", "dxb8324429");
        $("button[type='submit']").click();
        //$('.auth0-lock-submit').click();
        //document_root.getElementById('loginWidget').getElementsByTagName('button')[0].click();
    }, 500)

    //var html = '',
    //    node = document_root.firstChild;
    //while (node) {
    //    switch (node.nodeType) {
    //    case Node.ELEMENT_NODE:
    //        html += node.outerHTML;
    //        break;
    //    case Node.TEXT_NODE:
    //        html += node.nodeValue;
    //        break;
    //    case Node.CDATA_SECTION_NODE:
    //        html += '<![CDATA[' + node.nodeValue + ']]>';
    //        break;
    //    case Node.COMMENT_NODE:
    //        html += '<!--' + node.nodeValue + '-->';
    //        break;
    //    case Node.DOCUMENT_TYPE_NODE:
    //        // (X)HTML documents are identified by public identifiers
    //        html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
    //        break;
    //    }
    //    node = node.nextSibling;
    //}
    return "";
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});