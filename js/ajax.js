$(document).ready(function(){
	$('a[rel*="tag"]').click(function() {
    		return false;
	});
	$("#logo").css("cursor", "default");
	$("#homemenu").css("cursor", "default");
	$("#homefooter").css("cursor", "default");
	$("#homemenu, #homefooter, #logo").click(function(){
		$.ajax({
			success: function(){				
				$("#textcontent").html("\
					<h1>Home</h1>\
					<figure class='floatright'>\
						<img src='media/jaimemontoya.jpg' alt='Jaime Montoya' title='Jaime Montoya' width='148' height='207'>\
						<figcaption class='width148 center'>Jaime Montoya</figcaption>\
					</figure>\
					<p>I am Jaime Montoya <<a href='mailto:webmaster@jaimemontoya.com'>webmaster@jaimemontoya.com</a>>. This is my personal website and I am using it to exemplify a single-page application. All of the text content in this site, except for this paragraph, was obtained from <a href='https://en.wikipedia.org/wiki/Single-page_application'>https://en.wikipedia.org/wiki/Single-page_application</a> and reused under the terms of the <a href='https://creativecommons.org/licenses/by-sa/3.0/'>Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)</a> license.</p>\
					<p>A single-page application (SPA) is a web application or web site that fits on a single web page with the goal of providing a more fluid user experience similar to a desktop application. In a SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does control transfer to another page, although the location hash can be used to provide the perception and navigability of separate logical pages in the application, as can the HTML5 pushState() API. Interaction with the single page application often involves dynamic communication with the web server behind the scenes.</p>\
				");
				$("#logo").css("cursor", "default");
				$("#homemenu").css("cursor", "default");
				$("#homefooter").css("cursor", "default");
				$("#frameworksmenu").css("cursor", "pointer");
				$("#frameworksfooter").css("cursor", "pointer");
				$("#approachesmenu").css("cursor", "pointer");
				$("#approachesfooter").css("cursor", "pointer");
				$("#architecturemenu").css("cursor", "pointer");
				$("#architecturefooter").css("cursor", "pointer");
				$("#challengesmenu").css("cursor", "pointer");
				$("#challengesfooter").css("cursor", "pointer");
				$("#homemenu").addClass("activemenu");
				$("#homefooter").addClass("activefooter");				
				$("#frameworksmenu").removeClass("activemenu");
				$("#frameworksfooter").removeClass("activefooter");
				$("#approachesmenu").removeClass("activemenu");
				$("#approachesfooter").removeClass("activefooter");
				$("#architecturemenu").removeClass("activemenu");
				$("#architecturefooter").removeClass("activefooter");
				$("#challengesmenu").removeClass("activemenu");
				$("#challengesfooter").removeClass("activefooter");
			}
		})
	});
	$("#frameworksmenu, #frameworksfooter").click(function(){
		$.ajax({
			success: function(){
				$("#textcontent").html("\
					<h1>Frameworks</h1>\
					<p>Web browser JavaScript frameworks, such as AngularJS, Ember.js, Meteor.js, ExtJS and React have adopted SPA principles.</p>\
					<ul>\
						<li>AngularJS is a fully client-side framework. AngularJS's templating is based on bidirectional UI data binding. Data-binding is an automatic way of updating the view whenever the model changes, as well as updating the model whenever the view changes. The HTML template is compiled in the browser. The compilation step creates pure HTML, which the browser re-renders into the live view. The step is repeated for subsequent page views. In traditional server-side HTML programming, concepts such as controller and model interact within a server process to produce new HTML views. In the AngularJS framework, the controller and model states are maintained within the client browser. Therefore new pages are capable of being generated without any interaction with a server.</li>\
						<li>Ember.js is a client-side JavaScript web application framework based on the model-view-controller (MVC) software architectural pattern. It allows developers to create scalable single-page applications by incorporating common idioms and best practices into a framework that provides a rich object model, declarative two-way data binding, computed properties, automatically-updating templates powered by Handlebars.js, and a router for managing application state.</li>\
						<li>Meteor.js is a full-stack (client-server) JavaScript framework designed exclusively for SPAs. It features simpler data binding than Angular, Ember or ReactJS, and uses the Distributed Data Protocol and a  a publish–subscribe pattern to automatically propagate data changes to clients in real-time without requiring the developer to write any synchronization code. Full stack reactivity ensures that all layers, from the database to the templates, update themselves automatically when necessary. Ecosystem packages such as Server Side Rendering address the problem of Search Engine Optimization.</li>\
					</ul>\
				");
				$("#logo").css("cursor", "pointer");
				$("#homemenu").css("cursor", "pointer");
				$("#homefooter").css("cursor", "pointer");
				$("#frameworksmenu").css("cursor", "default");
				$("#frameworksfooter").css("cursor", "default");
				$("#approachesmenu").css("cursor", "pointer");
				$("#approachesfooter").css("cursor", "pointer");
				$("#architecturemenu").css("cursor", "pointer");
				$("#architecturefooter").css("cursor", "pointer");
				$("#challengesmenu").css("cursor", "pointer");
				$("#challengesfooter").css("cursor", "pointer");
				$("#homemenu").removeClass("activemenu");
				$("#homefooter").removeClass("activefooter");
				$("#frameworksmenu").addClass("activemenu");
				$("#frameworksfooter").addClass("activefooter");
				$("#frameworksmenu").css("cursor", "default");
				$("#frameworksfooter").css("cursor", "default");				
				$("#approachesmenu").removeClass("activemenu");
				$("#approachesfooter").removeClass("activefooter");
				$("#architecturemenu").removeClass("activemenu");
				$("#architecturefooter").removeClass("activefooter");
				$("#challengesmenu").removeClass("activemenu");
				$("#challengesfooter").removeClass("activefooter");
			}
		})
	});	
	$("#approachesmenu, #approachesfooter").click(function(){
		$.ajax({
			success: function(){
				$("#textcontent").html("\
					<h1>Approaches</h1>\
					<p>There are various techniques available that enable the browser to retain a single page even when the application requires server communication.</p>\
					<h2>JavaScript frameworks</h2>\
					<p>Web browser JavaScript frameworks, such as AngularJS, Ember.js, Meteor.js, ExtJS and React have adopted SPA principles.</p>\
					<ul>\
						<li>AngularJS is a fully client-side framework. AngularJS's templating is based on bidirectional UI data binding. Data-binding is an automatic way of updating the view whenever the model changes, as well as updating the model whenever the view changes. The HTML template is compiled in the browser. The compilation step creates pure HTML, which the browser re-renders into the live view. The step is repeated for subsequent page views. In traditional server-side HTML programming, concepts such as controller and model interact within a server process to produce new HTML views. In the AngularJS framework, the controller and model states are maintained within the client browser. Therefore new pages are capable of being generated without any interaction with a server.</li>\
						<li>Ember.js is a client-side JavaScript web application framework based on the model-view-controller (MVC) software architectural pattern. It allows developers to create scalable single-page applications by incorporating common idioms and best practices into a framework that provides a rich object model, declarative two-way data binding, computed properties, automatically-updating templates powered by Handlebars.js, and a router for managing application state.</li>\
						<li>Meteor.js is a full-stack (client-server) JavaScript framework designed exclusively for SPAs. It features simpler data binding than Angular, Ember or ReactJS, and uses the Distributed Data Protocol and a publishâ€“subscribe pattern to automatically propagate data changes to clients in real-time without requiring the developer to write any synchronization code. Full stack reactivity ensures that all layers, from the database to the templates, update themselves automatically when necessary. Ecosystem packages such as Server Side Rendering address the problem of Search Engine Optimization.</li>\
					</ul>\
					<h2>Ajax</h2>\
					<p>The most prominent technique currently being used is Ajax. Predominantly using the XMLHttpRequest object from JavaScript, other Ajax approaches include using IFRAME or script HTML elements. Popular libraries like jQuery, which normalize Ajax behavior across browsers from different manufacturers, have further popularized the Ajax technique.</p>\
					<h2>Websockets</h2>\
					<p>WebSockets are a bidirectional stateful real-time client-server communication technology part of the HTML5 specification, superior to Ajax in terms of performance and simplicity.</p>\
					<h2>Browser plugins</h2>\
					<p>Although this method is outdated, asynchronous calls to the server may also be achieved using browser plug-in technologies such as Silverlight, Flash, or Java applets.</p>\
					<h2>Data transport (XML, JSON and Ajax)</h2>\
					<p>Requests to the server typically result in either raw data (e.g., XML or JSON), or new HTML being returned. In the case where HTML is returned by the server, JavaScript on the client updates a partial area of the DOM (Document Object Model). When raw data is returned, often a client-side JavaScript XML / (XSL) process (and in the case of JSON a template) is used to translate the raw data into HTML, which is then used to update a partial area of the DOM.</p>\
				");
				$("#logo").css("cursor", "pointer");
				$("#homemenu").css("cursor", "pointer");
				$("#homefooter").css("cursor", "pointer");
				$("#frameworksmenu").css("cursor", "pointer");
				$("#frameworksfooter").css("cursor", "pointer");
				$("#approachesmenu").css("cursor", "default");
				$("#approachesfooter").css("cursor", "default");
				$("#architecturemenu").css("cursor", "pointer");
				$("#architecturefooter").css("cursor", "pointer");
				$("#challengesmenu").css("cursor", "pointer");
				$("#challengesfooter").css("cursor", "pointer");
				$("#homemenu").removeClass("activemenu");
				$("#homefooter").removeClass("activefooter");
				$("#frameworksmenu").removeClass("activemenu");
				$("#frameworksfooter").removeClass("activefooter");
				$("#approachesmenu").addClass("activemenu");
				$("#approachesfooter").addClass("activefooter");
				$("#approachesmenu").css("cursor", "default");
				$("#approachesfooter").css("cursor", "default");				
				$("#architecturemenu").removeClass("activemenu");
				$("#architecturefooter").removeClass("activefooter");
				$("#challengesmenu").removeClass("activemenu");
				$("#challengesfooter").removeClass("activefooter");
			}
		})
	});
	$("#architecturemenu, #architecturefooter").click(function(){
		$.ajax({
			success: function(){
				$("#textcontent").html('\
					<h1>Architecture</h1>\
					<h2>Thin server architecture</h2>\
					<p>A SPA moves logic from the server to the client. This results in the role of the web server evolving into a pure data API or web service. This architectural shift has, in some circles, been coined "Thin Server Architecture" to highlight that complexity has been moved from the server to the client, with the argument that this ultimately reduces overall complexity of the system.</p>\
					<h2>Thick stateful server architecture</h2>\
					<p>The server keeps the necessary state in memory of the client state of the page. In this way, when any request hits the server (usually user actions), the server sends the appropriate HTML and/or JavaScript with the concrete changes to bring the client to the new desired state (usually adding/deleting/updating a part of the client DOM). At the same time, the state in server is updated. Most of the logic is executed on the server, and HTML is usually also rendered on the server. In some ways, the server simulates a web browser, receiving events and performing delta changes in server state which are automatically propagated to client.</p>\
					<p>This approach needs more server memory and server processing, but the advantage is a simplified development model because a) the application is usually fully coded in the server, and b) data and UI state in the server are shared in the same memory space with no need for custom client/server communication bridges.</p>\
					<h2>Thick stateless server architecture</h2>\
					<p>This is a variant of the stateful server approach. The client page sends data representing its current state to the server, usually through Ajax requests. Using this data, the server is able to reconstruct the client state of the part of the page which needs to be modified and can generate the necessary data or code (for instance, as JSON or JavaScript), which is returned to the client to bring it to a new state, usually modifying the page DOM tree according to the client action which motivated the request.</p>\
					<p>This approach requires that more data be sent to the server and may require more computational resources per request to partially or fully reconstruct the client page state in the server. At the same time, this approach is more easily scalable because there is no per-client page data kept in the server and, therefore, Ajax requests can be dispatched to different server nodes with no need for session data sharing or server affinity.</p>\
				');
				$("#logo").css("cursor", "pointer");
				$("#homemenu").css("cursor", "pointer");
				$("#homefooter").css("cursor", "pointer");
				$("#frameworksmenu").css("cursor", "pointer");
				$("#frameworksfooter").css("cursor", "pointer");
				$("#approachesmenu").css("cursor", "pointer");
				$("#approachesfooter").css("cursor", "pointer");
				$("#architecturemenu").css("cursor", "default");
				$("#architecturefooter").css("cursor", "default");
				$("#challengesmenu").css("cursor", "pointer");
				$("#challengesfooter").css("cursor", "pointer");
				$("#homemenu").removeClass("activemenu");
				$("#homefooter").removeClass("activefooter");
				$("#frameworksmenu").removeClass("activemenu");
				$("#frameworksfooter").removeClass("activefooter");
				$("#approachesmenu").removeClass("activemenu");
				$("#approachesfooter").removeClass("activefooter");
				$("#architecturemenu").addClass("activemenu");
				$("#architecturefooter").addClass("activefooter");
				$("#architecturemenu").css("cursor", "default");
				$("#architecturefooter").css("cursor", "default");
				$("#challengesmenu").removeClass("activemenu");
				$("#challengesfooter").removeClass("activefooter");
			}
		})
	});
	$("#challengesmenu, #challengesfooter").click(function(){
		$.ajax({
			success: function(){
				$("#textcontent").html("\
					<h1>Challenges</h1>\
					<p>Because the SPA is an evolution away from the stateless page-redraw model that browsers were originally designed for, some new challenges have emerged. Each of these problems has an effective solution with:</p>\
					<ul>\
						<li>Client-side JavaScript libraries addressing various issues.</li>\
						<li>Server-side web frameworks that specialize in the SPA model.</li>\
						<li>The evolution of browsers and the HTML5 specification aimed at the SPA model.</li>\
					</ul>\
					<h2>Search engine optimization</h2>\
					<p>Because of the lack of JavaScript execution on crawlers of some popular Web search engines, SEO (Search engine optimization) has historically presented a problem for public facing websites wishing to adopt the SPA model.</p>\
					<p>Google currently crawls URLs containing hash fragments starting with #!. This allows the use of hash fragments within the single URL of an SPA. Special behavior must be implemented by the SPA site to allow extraction of relevant metadata by the search engine's crawler. For search engines that do not support this URL hash scheme, the hashed URLs of the SPA remain invisible.</p>\
					<p>Alternatively, applications may render the first page load on the server and subsequent page updates on the client. This is traditionally difficult, because the rendering code might need to be written in a different language or framework on the server and in the client. Using logic-less templates, cross-compiling from one language to another, or using the same language on the server and the client may help to increase the amount of code that can be shared.</p>\
					<p>Because SEO compatibility is not trivial in SPAs, it's worth noting that SPAs are commonly not used in a context where search engine indexing is either a requirement, or desirable. Use cases include applications that surface private data hidden behind an authentication system. In the cases where these applications are consumer products, often a classic 'page redraw' model is used for the applications landing page and marketing site, which provides enough meta data for the application to appear as a hit in a search engine query. Blogs, support forums, and other traditional page redraw artifacts often sit around the SPA that can seed search engines with relevant terms.</p>\
					<p>Another approach used by server-centric web frameworks like the Java-based ItsNat is to render any hypertext in the server using the same language and templating technology. In this approach, the server knows with precision the DOM state in the client, any big or small page update required is generated in the server, and transported by Ajax, the exact JavaScript code to bring the client page to the new state executing DOM methods. Developers can decide which page states must be crawlable by web spiders for SEO and be able to generate the required state at load time generating plain HTML instead of JavaScript. In the case of the ItsNat framework, this is automatic because ItsNat keeps the client DOM tree in the server as a Java W3C DOM tree; rendering of this DOM tree in the server generates plain HTML at load time and JavaScript DOM actions for Ajax requests. This duality is very important for SEO because developers can build with the same Java code and pure HTML-based templating the desired DOM state in server; at page load time, conventional HTML is generated by ItsNat making this DOM state SEO-compatible. As of version 1.3, ItsNat provides a new stateless mode, and the client DOM is not kept on the server because, with the stateless mode client, DOM state is partially or fully reconstructed on the server when processing any Ajax request based on required data sent by the client informing the server of the current DOM state; the stateless mode may be also SEO-compatible because SEO compatibility happens at load time of the initial page unaffected by stateful or stateless modes.</p>\
					<p>There are a couple of workarounds to make it look as though the web site is crawlable. Both involve creating separate HTML pages that mirror the content of the SPA. The server could create an HTML-based version of the site and deliver that to crawlers, or it's possible to use a headless browser such as PhantomJS to run the JavaScript application and output the resulting HTML.</p>\
					<p>Both of these do require quite a bit of effort, and can end up giving a maintenance headache for the large complex sites. There are also potential SEO pitfalls. If server-generated HTML is deemed to be too different from the SPA content, then the site will be penalized. Running PhantomJS to output the HTML can slow down the response speed of the pages, which is something for which search engines â€“ Google in particular â€“ downgrade the rankings.</p>\
					<h2>Client/Server code partitioning</h2>\
					<p>One way to increase the amount of code that can be shared between servers and clients is to use a logic-less template language like Mustache or Handlebars. Such templates can be rendered from different host languages, such as Ruby on the server and JavaScript in the client. However, merely sharing templates typically requires duplication of business logic used to choose the correct templates and populate them with data. Rendering from templates may have negative performance effects when only updating a small portion of the pageâ€”such as the value of a text input within a large template. Replacing an entire template might also disturb a user's selection or cursor position, where updating only the changed value might not. To avoid these problems, applications can use UI data bindings or granular DOM manipulation to only update the appropriate parts of the page instead of re-rendering entire templates.</p>\
					<h2>Browser history</h2>\
					<p>With an SPA being, by definition, 'a single page', the model breaks the browser's design for page history navigation using the Forward/Back buttons. This presents a usability impediment when a user presses the back button, expecting the previous screen state within the SPA, but instead the application's single page unloads and the previous page in the browser's history is presented.</p>\
					<p>The traditional solution for SPAs has been to change the browser URL's hash fragment identifier in accord with the current screen state. This can be achieved with JavaScript, and causes URL history events to be built up within the browser. As long as the SPA is capable of resurrecting the same screen state from information contained within the URL hash, the expected back button behavior is retained.</p>\
					<p>To further address this issue, the HTML5 specification has introduced pushState and replaceState providing programmatic access to the actual URL and browser history.</p>\
					<h2>Analytics</h2>\
					<p>Analytics tools such as Google Analytics rely heavily upon entire new pages loading in the browser, initiated by a new page load. SPAs do not work this way.</p>\
					<h2>Adding page loads to an SPA</h2>\
					<p>It is possible to add page load events to an SPA using the HTML5 history API; this will help integrate analytics. The difficulty comes in managing this and ensuring that everything is being tracked accurately â€“ this involves checking for missing reports and double entries. Some frameworks provide open source analytics integrations addressing most of the major analytics providers. Developers can integrate them into the application and make sure that everything is working correctly, but there is no need to do everything from scratch.</p>\
					<h2>Speed of initial load</h2>\
					<p>Single Page Applications have a slower first page load than server-based applications. This is because the first load has to bring down the framework and the application code before rendering the required view as HTML in the browser. A server-based application just has to push out the required HTML to the browser, reducing the latency and download time.</p>\
					<h2>Speeding up the page load</h2>\
					<p>There are some ways of speeding up the initial load of an SPA, such as a heavy approach to caching and lazy-loading modules when needed. But it's not possible to get away from the fact that it needs to download the framework, at least some of the application code, and will most likely hit an API for data before displaying something in the browser. This is a 'pay me now, or pay me later' trade-off scenario. The question of performance and wait-times remains a decision that the developer must make.</p>\
				");
				$("#logo").css("cursor", "pointer");
				$("#homemenu").css("cursor", "pointer");
				$("#homefooter").css("cursor", "pointer");
				$("#frameworksmenu").css("cursor", "pointer");
				$("#frameworksfooter").css("cursor", "pointer");
				$("#approachesmenu").css("cursor", "pointer");
				$("#approachesfooter").css("cursor", "pointer");
				$("#architecturemenu").css("cursor", "pointer");
				$("#architecturefooter").css("cursor", "pointer");
				$("#challengesmenu").css("cursor", "default");
				$("#challengesfooter").css("cursor", "default");
				$("#homemenu").removeClass("activemenu");
				$("#homefooter").removeClass("activefooter");
				$("#frameworksmenu").removeClass("activemenu");
				$("#frameworksfooter").removeClass("activefooter");
				$("#approachesmenu").removeClass("activemenu");
				$("#approachesfooter").removeClass("activefooter");
				$("#architecturemenu").removeClass("activemenu");
				$("#architecturefooter").removeClass("activefooter");
				$("#challengesmenu").addClass("activemenu");
				$("#challengesfooter").addClass("activefooter");
				$("#challengesmenu").css("cursor", "default");
				$("#challengesfooter").css("cursor", "default");
			}
		})
	});
});
