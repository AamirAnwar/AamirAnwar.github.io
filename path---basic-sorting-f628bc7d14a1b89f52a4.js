webpackJsonp([74836836807855],{503:function(t,e){t.exports={data:{site:{siteMetadata:{title:"The Developer Times",author:"Aamir Anwar"}},markdownRemark:{id:"/Users/Hazmat/Documents/OpenSourceProjects/AamirAnwar.github.io/src/pages/basic-sorting/index.md absPath of file >>> MarkdownRemark",html:'<h2>About Sorting</h2>\n<p>TL;DR - Get to know the classic sorting algorithms and go write them in your favourite programming language on a whiteboard.</p>\n<p>Sorting is one of the most fundamental problems that comes up in computing. There are a few classic algorithms which solve this in minimal time, here are a few of them with their running times -</p>\n<ul>\n<li>Bubble sort - O(n<sup>2</sup>)</li>\n<li>Insertion sort - O(n<sup>2</sup>)</li>\n<li>Selection sort - O(n<sup>2</sup>)</li>\n<li>Merge sort - O(n*log(n))</li>\n<li>Quick sort - O(n<sup>2</sup>)</li>\n</ul>\n<p>Yep you read that right, Quicksort which is widely known as one of the fastest sorting algorithm has a worst case of O(n<sup>2</sup>). Quicksort gains it’s speed from randomising pivot selection which on average gives the algorithm a better upper bound of O(n*log(n)). Mergesort is great when your input is too big to fit into main memory which does happen time to time. If you see a situation like this, Mergesort is your best friend.</p>\n<p>Bubble sort, Insertion sort and Selection sort have a upper bound of O(n<sup>2</sup>) which should make you think twice before using them. If your input size is small (around 10 maybe?) these algorithms actually run faster than their superiors. That being said, you can speed these guys up as well if you go ahead and memorize every data structure known to man (I can actually teach you how to do just that. You’ll be a god amongst men. <a href="https://en.wikipedia.org/wiki/List_of_data_structures">Here’s a list of them</a>).</p>\n<p>Coming back to these algorithms if you used a heap with selection sort you automatically get a boost (actually a downward boost) of running time and go from O(n<sup>2</sup>) to O(n*log(n)).</p>\n<p>It’s absolutely amazing what you can do to an algorithm if you know your data structures inside out. Another example of this is Kruskals Algorithm for finding the Minimum Spanning Tree in a weighted graph which goes from O(mn) to O(mlog(n)) using a nifty little data structure called the Union-Find data structure (or a Disjoint Set) but we’ll get to these guys in a later post.</p>\n<p>Another word to the wise, it’s not advised to use Quicksort when you don’t have random access capabilities, case in point, a Linked List. If you have to sort a Linked List, first thing is to see if you really really need to use a linked list? If that’s a yes then use Mergesort. Mergesort for linked lists breaks up into two subproblems,</p>\n<ul>\n<li>Find the middle of a linked list</li>\n<li>Merge two sorted linked lists in linear time</li>\n</ul>\n<p>If you know those two then sorting a Linked List is a piece of cake. But use an array instead if you can. Seriously do that.</p>\n<p>To conclude, if you had to take away one thing from this post it should be that you absolutely need to know you sorting routines inside and out in your favourite programming language. This goes a long way when you need to devise an algorithm which could potentially be a mutation of one of the classic sorts making for an instant win at the workplace.</p>\n<p>I’ll be writing up more posts like this so hit me up on <a href="https://twitter.com/aamiranwarr">Twitter</a> and i’ll sort out any concerns you may have with this. Sorry I just had to put a sorting pun there. Alright bye.</p>\n<p><img src="https://media.giphy.com/media/AmDzMmCJZABsk/giphy.gif"></p>',frontmatter:{title:"Sorting Heuristics",date:"April 16, 2018"}}},pathContext:{slug:"/basic-sorting/",previous:{fields:{slug:"/winter-of-17/"},frontmatter:{title:"Winter of 17"}},next:!1}}}});
//# sourceMappingURL=path---basic-sorting-f628bc7d14a1b89f52a4.js.map