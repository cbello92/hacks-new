import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItemSecondaryAction, Tooltip, Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';
import { AppContextHome } from '../../context/AppContextHome';
import Confirm from '../globals/Confirm';
import { diffDays } from '../../helpers/functions';

const data = [
    {
        "created_at": "2020-03-04T17:44:15.000Z",
        "title": null,
        "url": null,
        "author": "jerendy92",
        "points": null,
        "story_text": null,
        "comment_text": "Sure, in this case I can see that. I was referring to those four points with respect to Google services in general. I&#x27;m sure I don&#x27;t need to dig up a list of features and services that have been merged, shuttered, price hiked or moved into a different product suite over the years. Admittedly a lot of the issues are with the GSuite side of things, but it&#x27;s sad to see this coming to GCP as well.<p>On a hopefully more constructive note, if this is the way it&#x27;s going to be from now on, I would at least expect to see an exemption on such a management fee&#x2F;SLA on preemptible nodes - having an SLA and management fee on the cluster whereby nodes can be killed in a 30 second window without prior warning seems to be a little more than pointless.",
        "num_comments": null,
        "story_id": 22485625,
        "story_title": "Google Kubernetes Engine is introducing a cluster management fee on June 6, 2020",
        "story_url": null,
        "parent_id": 22485731,
        "created_at_i": 1583343855,
        "_tags": [
            "comment",
            "author_jerendy92",
            "story_22485625"
        ],
        "objectID": "22485868",
        "_highlightResult": {
            "author": {
                "value": "jerendy92",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Sure, in this case I can see that. I was referring to those four points with respect to Google services in general. I'm sure I don't need to dig up a list of features and services that have been merged, shuttered, price hiked or moved into a different product suite over the years. Admittedly a lot of the issues are with the GSuite side of things, but it's sad to see this coming to GCP as well.<p>On a hopefully more constructive note, if this is the way it's going to be from now on, I would at least expect to see an exemption on such a management fee/SLA on preemptible <em>nodes</em> - having an SLA and management fee on the cluster whereby <em>nodes</em> can be killed in a 30 second window without prior warning seems to be a little more than pointless.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Google Kubernetes Engine is introducing a cluster management fee on June 6, 2020",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T17:38:22.000Z",
        "title": null,
        "url": null,
        "author": "jeroenvisser101",
        "points": null,
        "story_text": null,
        "comment_text": "&gt; Last modified: November 27, 2018 | Previous Versions<p>&gt; As of November 28, 2017, Google Kubernetes Engine no longer charges a flat fee per hour per cluster for cluster management, regardless of cluster size, as provided at <a href=\"https:&#x2F;&#x2F;cloud.google.com&#x2F;kubernetes-engine&#x2F;pricing\" rel=\"nofollow\">https:&#x2F;&#x2F;cloud.google.com&#x2F;kubernetes-engine&#x2F;pricing</a>. Accordingly, Google no longer offers a financially-backed service level agreement for the Google Kubernetes Engine service. The service availability of nodes in a Google Kubernetes Engine-managed cluster is covered by the Google Compute Engine SLA at <a href=\"https:&#x2F;&#x2F;cloud.google.com&#x2F;compute&#x2F;sla\" rel=\"nofollow\">https:&#x2F;&#x2F;cloud.google.com&#x2F;compute&#x2F;sla</a>.<p>&gt; Uptime for Google Kubernetes Engine is nevertheless highly important to Google, and Google has an internal goal to keep the monthly uptime percentage at 99.5% for the Kubernetes API server for zonal clusters and 99.95% for regional clusters regardless of the applicability of a financially-backed service level agreement.<p><a href=\"https:&#x2F;&#x2F;cloud.google.com&#x2F;kubernetes-engine&#x2F;sla\" rel=\"nofollow\">https:&#x2F;&#x2F;cloud.google.com&#x2F;kubernetes-engine&#x2F;sla</a><p>Interesting that they&#x27;re now walking back from this...",
        "num_comments": null,
        "story_id": 22485679,
        "story_title": "Google Cloud charging for Kubernetes Clusters beginning June 2020",
        "story_url": "https://cloud.google.com/kubernetes-engine/pricing",
        "parent_id": 22485679,
        "created_at_i": 1583343502,
        "_tags": [
            "comment",
            "author_jeroenvisser101",
            "story_22485679"
        ],
        "objectID": "22485797",
        "_highlightResult": {
            "author": {
                "value": "jeroenvisser101",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "&gt; Last modified: November 27, 2018 | Previous Versions<p>&gt; As of November 28, 2017, Google Kubernetes Engine no longer charges a flat fee per hour per cluster for cluster management, regardless of cluster size, as provided at <a href=\"https://cloud.google.com/kubernetes-engine/pricing\" rel=\"nofollow\">https://cloud.google.com/kubernetes-engine/pricing</a>. Accordingly, Google no longer offers a financially-backed service level agreement for the Google Kubernetes Engine service. The service availability of <em>nodes</em> in a Google Kubernetes Engine-managed cluster is covered by the Google Compute Engine SLA at <a href=\"https://cloud.google.com/compute/sla\" rel=\"nofollow\">https://cloud.google.com/compute/sla</a>.<p>&gt; Uptime for Google Kubernetes Engine is nevertheless highly important to Google, and Google has an internal goal to keep the monthly uptime percentage at 99.5% for the Kubernetes API server for zonal clusters and 99.95% for regional clusters regardless of the applicability of a financially-backed service level agreement.<p><a href=\"https://cloud.google.com/kubernetes-engine/sla\" rel=\"nofollow\">https://cloud.google.com/kubernetes-engine/sla</a><p>Interesting that they're now walking back from this...",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Google Cloud charging for Kubernetes Clusters beginning June 2020",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://cloud.google.com/kubernetes-engine/pricing",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T17:38:06.000Z",
        "title": null,
        "url": null,
        "author": "jerendy92",
        "points": null,
        "story_text": null,
        "comment_text": "Why is this change coming in? I can hardly see costs on Google&#x27;s side having increased to provision and &#x27;manage&#x27; K8S having increased over the past 3 years, especially given that it&#x27;s used in production there. Also, given that no-cost K8S clusters was pushed by your sales and marketing teams back in 2018 as a significant benefit for switching to GCP, it doesn&#x27;t really inspire confidence in GCP if we&#x27;re just going to be shafted further on down the line. Lastly, $0.1&#x2F;hour is expensive given that a &#x27;managed&#x27; k8s cluster can be rolled out using Terraform and Ansible with a bunch of GCE nodes with minimal effort. This frankly just feels like a cash grab for those that are either inexperienced&#x2F;unfamiliar with cluster management&#x2F;provisioning, or from those that are in too deep with GCP and won&#x27;t have another option other than to pay the piper, so to speak.",
        "num_comments": null,
        "story_id": 22485625,
        "story_title": "Google Kubernetes Engine is introducing a cluster management fee on June 6, 2020",
        "story_url": null,
        "parent_id": 22485670,
        "created_at_i": 1583343486,
        "_tags": [
            "comment",
            "author_jerendy92",
            "story_22485625"
        ],
        "objectID": "22485796",
        "_highlightResult": {
            "author": {
                "value": "jerendy92",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Why is this change coming in? I can hardly see costs on Google's side having increased to provision and 'manage' K8S having increased over the past 3 years, especially given that it's used in production there. Also, given that no-cost K8S clusters was pushed by your sales and marketing teams back in 2018 as a significant benefit for switching to GCP, it doesn't really inspire confidence in GCP if we're just going to be shafted further on down the line. Lastly, $0.1/hour is expensive given that a 'managed' k8s cluster can be rolled out using Terraform and Ansible with a bunch of GCE <em>nodes</em> with minimal effort. This frankly just feels like a cash grab for those that are either inexperienced/unfamiliar with cluster management/provisioning, or from those that are in too deep with GCP and won't have another option other than to pay the piper, so to speak.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Google Kubernetes Engine is introducing a cluster management fee on June 6, 2020",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T16:44:18.000Z",
        "title": null,
        "url": null,
        "author": "quantified",
        "points": null,
        "story_text": null,
        "comment_text": "I may be missing something, but to any of them let you return information that is not a node in the underlying graph? I had a project once where a user request would result in a graph that was derived: result nodes and edges were derived based on the database’s nodes and edges. Rolled my own system because nothing supported that.<p>Related, do any of the let you do something simple like return a count of vertices obtained from a traversal, or do you need to walk a result and count them yourself?",
        "num_comments": null,
        "story_id": 22482665,
        "story_title": "Graph query languages: Cypher vs. Gremlin vs. nGQL",
        "story_url": "https://nebula-graph.io/en/posts/graph-query-language-comparison-cypher-gremlin-ngql/",
        "parent_id": 22482665,
        "created_at_i": 1583340258,
        "_tags": [
            "comment",
            "author_quantified",
            "story_22482665"
        ],
        "objectID": "22485294",
        "_highlightResult": {
            "author": {
                "value": "quantified",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "I may be missing something, but to any of them let you return information that is not a node in the underlying graph? I had a project once where a user request would result in a graph that was derived: result <em>nodes</em> and edges were derived based on the database’s <em>nodes</em> and edges. Rolled my own system because nothing supported that.<p>Related, do any of the let you do something simple like return a count of vertices obtained from a traversal, or do you need to walk a result and count them yourself?",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Graph query languages: Cypher vs. Gremlin vs. nGQL",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://nebula-graph.io/en/posts/graph-query-language-comparison-cypher-gremlin-ngql/",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T16:42:06.000Z",
        "title": null,
        "url": null,
        "author": "tannhaeuser",
        "points": null,
        "story_text": null,
        "comment_text": "I think the reasoning behind RDF using URIs&#x2F;IRIs for nodes and predicates is that this gives a globally unique naming hierarchy (backed by DNS in turn), such that when combining heterogenous data there&#x27;s no name clash, and at the same time allows for liberal use in closed DBs via &quot;urn:&quot; URLs. But yeah, if the linked article insinuates that dereferencing RDF URLs is useful or even common, that would be false IMO.",
        "num_comments": null,
        "story_id": 22482665,
        "story_title": "Graph query languages: Cypher vs. Gremlin vs. nGQL",
        "story_url": "https://nebula-graph.io/en/posts/graph-query-language-comparison-cypher-gremlin-ngql/",
        "parent_id": 22484881,
        "created_at_i": 1583340126,
        "_tags": [
            "comment",
            "author_tannhaeuser",
            "story_22482665"
        ],
        "objectID": "22485271",
        "_highlightResult": {
            "author": {
                "value": "tannhaeuser",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "I think the reasoning behind RDF using URIs/IRIs for <em>nodes</em> and predicates is that this gives a globally unique naming hierarchy (backed by DNS in turn), such that when combining heterogenous data there's no name clash, and at the same time allows for liberal use in closed DBs via &quot;urn:&quot; URLs. But yeah, if the linked article insinuates that dereferencing RDF URLs is useful or even common, that would be false IMO.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Graph query languages: Cypher vs. Gremlin vs. nGQL",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://nebula-graph.io/en/posts/graph-query-language-comparison-cypher-gremlin-ngql/",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T16:05:44.000Z",
        "title": null,
        "url": null,
        "author": "tasogare",
        "points": null,
        "story_text": null,
        "comment_text": "From your link &quot;W3C&#x27;s RDF uses URIs (Web addresses) for nodes and link labels in directed graphs. This has the advantage of enabling them to be dereferenced to obtain further information, making for a Web of linked data. In particular, nodes can be dereferenced to graphs on remote databases.&quot;<p>I think spreading those kind of lies[1] if a part of why there is a divide between the W3C (at least the RDF community) and the rest of the word. The W3C should be more transparent about RDF capabilities and realistic about the real power of the Semantic Web.<p>[1] this false because RDF use IRIs not URLs, and not all IRIs are dereferenceable. Moreover, even URLs used as resource id are not constrained to be dereferenceable per the spec (and when they are, you&#x27;ll get a lot 404 in practice). Also, the same effect can be obtained as easily with properties (key value pair) attached on nodes of graph database.",
        "num_comments": null,
        "story_id": 22482665,
        "story_title": "Graph query languages: Cypher vs. Gremlin vs. nGQL",
        "story_url": "https://nebula-graph.io/en/posts/graph-query-language-comparison-cypher-gremlin-ngql/",
        "parent_id": 22483647,
        "created_at_i": 1583337944,
        "_tags": [
            "comment",
            "author_tasogare",
            "story_22482665"
        ],
        "objectID": "22484881",
        "_highlightResult": {
            "author": {
                "value": "tasogare",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "From your link &quot;W3C's RDF uses URIs (Web addresses) for <em>nodes</em> and link labels in directed graphs. This has the advantage of enabling them to be dereferenced to obtain further information, making for a Web of linked data. In particular, <em>nodes</em> can be dereferenced to graphs on remote databases.&quot;<p>I think spreading those kind of lies[1] if a part of why there is a divide between the W3C (at least the RDF community) and the rest of the word. The W3C should be more transparent about RDF capabilities and realistic about the real power of the Semantic Web.<p>[1] this false because RDF use IRIs not URLs, and not all IRIs are dereferenceable. Moreover, even URLs used as resource id are not constrained to be dereferenceable per the spec (and when they are, you'll get a lot 404 in practice). Also, the same effect can be obtained as easily with properties (key value pair) attached on <em>nodes</em> of graph database.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Graph query languages: Cypher vs. Gremlin vs. nGQL",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://nebula-graph.io/en/posts/graph-query-language-comparison-cypher-gremlin-ngql/",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T15:18:48.000Z",
        "title": null,
        "url": null,
        "author": "jcranmer",
        "points": null,
        "story_text": null,
        "comment_text": "By default, every function call--including external function calls--can cause an exception to be thrown. Any unresolved function call now causes an extra edge in the control-flow graph that goes to what is effectively a return in the function. This extra edge is also harder to manipulate for normal CFG optimizations (e.g., splitting critical edges or duplicating nodes).",
        "num_comments": null,
        "story_id": 22483028,
        "story_title": "Low-cost Deterministic C++ Exceptions for Embedded Systems [pdf]",
        "story_url": "https://www.research.ed.ac.uk/portal/files/78829292/low_cost_deterministic_C_exceptions_for_embedded_systems.pdf",
        "parent_id": 22484213,
        "created_at_i": 1583335128,
        "_tags": [
            "comment",
            "author_jcranmer",
            "story_22483028"
        ],
        "objectID": "22484431",
        "_highlightResult": {
            "author": {
                "value": "jcranmer",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "By default, every function call--including external function calls--can cause an exception to be thrown. Any unresolved function call now causes an extra edge in the control-flow graph that goes to what is effectively a return in the function. This extra edge is also harder to manipulate for normal CFG optimizations (e.g., splitting critical edges or duplicating <em>nodes</em>).",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Low-cost Deterministic C++ Exceptions for Embedded Systems [pdf]",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://www.research.ed.ac.uk/portal/files/78829292/low_cost_deterministic_C_exceptions_for_embedded_systems.pdf",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T15:14:13.000Z",
        "title": null,
        "url": null,
        "author": "ailideex",
        "points": null,
        "story_text": null,
        "comment_text": "OLTP in this context is indeed online transaction processing.<p>This general approach of «let it &quot;crash&quot;[1]» or happy path programming is what I used when I wrote OTLP systems for mobile networks which were performing financial transactions. The exception handling would allow you to write fairly complex business logic and relying on exception handling to recover to a stable state.<p>[1]: Crashing in Erlang terms is not at all what people generally mean with crashing. It is a very unfortunate word because in part many of the problems in node.js comes from joyent not understanding what &quot;let it crash&quot; meant - it did not mean let the unix process crash. Erlang does one process per transaction and they are incredibly lightweight. Some details from joyent can be found here: <a href=\"https:&#x2F;&#x2F;www.joyent.com&#x2F;node-js&#x2F;production&#x2F;design&#x2F;errors\" rel=\"nofollow\">https:&#x2F;&#x2F;www.joyent.com&#x2F;node-js&#x2F;production&#x2F;design&#x2F;errors</a>",
        "num_comments": null,
        "story_id": 22483028,
        "story_title": "Low-cost Deterministic C++ Exceptions for Embedded Systems [pdf]",
        "story_url": "https://www.research.ed.ac.uk/portal/files/78829292/low_cost_deterministic_C_exceptions_for_embedded_systems.pdf",
        "parent_id": 22484290,
        "created_at_i": 1583334853,
        "_tags": [
            "comment",
            "author_ailideex",
            "story_22483028"
        ],
        "objectID": "22484388",
        "_highlightResult": {
            "author": {
                "value": "ailideex",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "OLTP in this context is indeed online transaction processing.<p>This general approach of «let it &quot;crash&quot;[1]» or happy path programming is what I used when I wrote OTLP systems for mobile networks which were performing financial transactions. The exception handling would allow you to write fairly complex business logic and relying on exception handling to recover to a stable state.<p>[1]: Crashing in Erlang terms is not at all what people generally mean with crashing. It is a very unfortunate word because in part many of the problems in node.js comes from joyent not understanding what &quot;let it crash&quot; meant - it did not mean let the unix process crash. Erlang does one process per transaction and they are incredibly lightweight. Some details from joyent can be found here: <a href=\"https://www.joyent.com/node-js/production/design/errors\" rel=\"nofollow\">https://www.joyent.com/<em>node-js</em>/production/design/errors</a>",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Low-cost Deterministic C++ Exceptions for Embedded Systems [pdf]",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://www.research.ed.ac.uk/portal/files/78829292/low_cost_deterministic_C_exceptions_for_embedded_systems.pdf",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T14:56:49.000Z",
        "title": null,
        "url": null,
        "author": "eyegor",
        "points": null,
        "story_text": null,
        "comment_text": "As with any big system, spinning it up is much harder than bringing it down. After an outage, they have to stay offline to audit their systems to ensure that all the nodes are synchronized, all queued trades have been processed, and no accounts are in invalid states. I&#x27;m sure they could have restarted in a matter of minutes, but the risk is ridiculously high.",
        "num_comments": null,
        "story_id": 22480260,
        "story_title": "An Update from Robinhood’s Founders",
        "story_url": "https://blog.robinhood.com/news/2020/3/3/an-update-from-robinhoods-founders",
        "parent_id": 22483649,
        "created_at_i": 1583333809,
        "_tags": [
            "comment",
            "author_eyegor",
            "story_22480260"
        ],
        "objectID": "22484217",
        "_highlightResult": {
            "author": {
                "value": "eyegor",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "As with any big system, spinning it up is much harder than bringing it down. After an outage, they have to stay offline to audit their systems to ensure that all the <em>nodes</em> are synchronized, all queued trades have been processed, and no accounts are in invalid states. I'm sure they could have restarted in a matter of minutes, but the risk is ridiculously high.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "An Update from Robinhood’s Founders",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://blog.robinhood.com/news/2020/3/3/an-update-from-robinhoods-founders",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T14:54:12.000Z",
        "title": null,
        "url": null,
        "author": "geofft",
        "points": null,
        "story_text": null,
        "comment_text": "Yes, which is why you shouldn&#x27;t use wall boards for alerting, only for visualization.<p><a href=\"https:&#x2F;&#x2F;demo.monitoror.com&#x2F;?configUrl=https:&#x2F;&#x2F;monitoror.com&#x2F;assets&#x2F;demo.monitoror.com-config.json\" rel=\"nofollow\">https:&#x2F;&#x2F;demo.monitoror.com&#x2F;?configUrl=https:&#x2F;&#x2F;monitoror.com&#x2F;...</a> is full of things that aren&#x27;t visualizations at all (no graphs, no sense of whether things are abnormal but not past an alerting threshold, etc.) and are in fact alerts (the website is fine, one PR failed, the QA nodes are ... doing something but there isn&#x27;t enough space to see what is wrong).<p>If you want some graphs, great. If you want your team to look up every few minutes and poll some graphs (or worse, some colored rectangles) to figure out what they&#x27;re supposed to be doing, consider that polling is usually the wrong approach.<p>(To be clear, this is a criticism of the choice of demo data, not of the product overall. A product like this has its uses, but &quot;our alerting system is people looking up at the TV&quot; is not one of them.)",
        "num_comments": null,
        "story_id": 22483436,
        "story_title": "Show HN: Monitoror – Unified monitoring wallboard",
        "story_url": "https://monitoror.com",
        "parent_id": 22483866,
        "created_at_i": 1583333652,
        "_tags": [
            "comment",
            "author_geofft",
            "story_22483436"
        ],
        "objectID": "22484191",
        "_highlightResult": {
            "author": {
                "value": "geofft",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Yes, which is why you shouldn't use wall boards for alerting, only for visualization.<p><a href=\"https://demo.monitoror.com/?configUrl=https://monitoror.com/assets/demo.monitoror.com-config.json\" rel=\"nofollow\">https://demo.monitoror.com/?configUrl=https://monitoror.com/...</a> is full of things that aren't visualizations at all (no graphs, no sense of whether things are abnormal but not past an alerting threshold, etc.) and are in fact alerts (the website is fine, one PR failed, the QA <em>nodes</em> are ... doing something but there isn't enough space to see what is wrong).<p>If you want some graphs, great. If you want your team to look up every few minutes and poll some graphs (or worse, some colored rectangles) to figure out what they're supposed to be doing, consider that polling is usually the wrong approach.<p>(To be clear, this is a criticism of the choice of demo data, not of the product overall. A product like this has its uses, but &quot;our alerting system is people looking up at the TV&quot; is not one of them.)",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Show HN: Monitoror – Unified monitoring wallboard",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://monitoror.com",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T11:46:00.000Z",
        "title": null,
        "url": null,
        "author": "andrewrembrandt",
        "points": null,
        "story_text": null,
        "comment_text": "Metaco | Lausanne, Switzerland | Mid-Senior TypeScript&#x2F;React, or C++, or QA Automation&#x2F;SDET | REMOTE EU (Only) OR ONSITE (Relocation an option)<p>We&#x27;re a leading blockchain software house that provides and integrates highly secure wallets for businesses (of all types).\nWe are looking for:\n- Mid-Senior React&#x2F;TypeScript developers<p>- Mid-Senior C++ developers<p>- A Mid-Senior QA Automation engineer &#x2F; SDET<p>We use:<p>- Mainly Linux cloud (and on the desktop)<p>- TypeScript, React, React Native, NodeJS<p>- C++ 11&#x2F;14 + more<p>- Docker, µServices, k8s, terraform, Google Cloud &amp; AWS<p>- Multiple security and cryptography approaches (prior experience not required)<p>- Technical testing in the interview process<p>Proficiency in English or French is a requirement, and a dedicated professional approach to working in a startup.<p>Drop a CV to jobs@metaco.com and please highlight relevant experience (recruiters&#x2F;agencies&#x2F;consultancies, please do not contact me).\nYou can also see roles at <a href=\"https:&#x2F;&#x2F;www.metaco.com&#x2F;careers&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.metaco.com&#x2F;careers&#x2F;</a> but please mention hackernews.",
        "num_comments": null,
        "story_id": 22465476,
        "story_title": "Ask HN: Who is hiring? (March 2020)",
        "story_url": null,
        "parent_id": 22465476,
        "created_at_i": 1583322360,
        "_tags": [
            "comment",
            "author_andrewrembrandt",
            "story_22465476"
        ],
        "objectID": "22482940",
        "_highlightResult": {
            "author": {
                "value": "andrewrembrandt",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Metaco | Lausanne, Switzerland | Mid-Senior TypeScript/React, or C++, or QA Automation/SDET | REMOTE EU (Only) OR ONSITE (Relocation an option)<p>We're a leading blockchain software house that provides and integrates highly secure wallets for businesses (of all types).\nWe are looking for:\n- Mid-Senior React/TypeScript developers<p>- Mid-Senior C++ developers<p>- A Mid-Senior QA Automation engineer / SDET<p>We use:<p>- Mainly Linux cloud (and on the desktop)<p>- TypeScript, React, React Native, <em>NodeJS</em><p>- C++ 11/14 + more<p>- Docker, µServices, k8s, terraform, Google Cloud &amp; AWS<p>- Multiple security and cryptography approaches (prior experience not required)<p>- Technical testing in the interview process<p>Proficiency in English or French is a requirement, and a dedicated professional approach to working in a startup.<p>Drop a CV to jobs@metaco.com and please highlight relevant experience (recruiters/agencies/consultancies, please do not contact me).\nYou can also see roles at <a href=\"https://www.metaco.com/careers/\" rel=\"nofollow\">https://www.metaco.com/careers/</a> but please mention hackernews.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Ask HN: Who is hiring? (March 2020)",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T11:27:21.000Z",
        "title": null,
        "url": null,
        "author": "ankithooda",
        "points": null,
        "story_text": null,
        "comment_text": "Location: Bangalore, India<p>Remote: Yes<p>Willing to relocate: No<p>Technologies: NodeJS, RoR<p>Résumé&#x2F;CV: <a href=\"https:&#x2F;&#x2F;www.linkedin.com&#x2F;in&#x2F;ankithooda&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.linkedin.com&#x2F;in&#x2F;ankithooda&#x2F;</a><p>Email: ankithooda237 [ ata ] gmail",
        "num_comments": null,
        "story_id": 22465474,
        "story_title": "Ask HN: Who wants to be hired? (March 2020)",
        "story_url": null,
        "parent_id": 22465474,
        "created_at_i": 1583321241,
        "_tags": [
            "comment",
            "author_ankithooda",
            "story_22465474"
        ],
        "objectID": "22482846",
        "_highlightResult": {
            "author": {
                "value": "ankithooda",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Location: Bangalore, India<p>Remote: Yes<p>Willing to relocate: No<p>Technologies: <em>NodeJS</em>, RoR<p>Résumé/CV: <a href=\"https://www.linkedin.com/in/ankithooda/\" rel=\"nofollow\">https://www.linkedin.com/in/ankithooda/</a><p>Email: ankithooda237 [ ata ] gmail",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Ask HN: Who wants to be hired? (March 2020)",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T09:15:44.000Z",
        "title": null,
        "url": null,
        "author": "dirtydroog",
        "points": null,
        "story_text": null,
        "comment_text": "If you used Scylla you&#x27;d have only needed 90 nodes. (Don&#x27;t believe the instability rumours)",
        "num_comments": null,
        "story_id": 22480260,
        "story_title": "An Update from Robinhood’s Founders",
        "story_url": "https://blog.robinhood.com/news/2020/3/3/an-update-from-robinhoods-founders",
        "parent_id": 22481771,
        "created_at_i": 1583313344,
        "_tags": [
            "comment",
            "author_dirtydroog",
            "story_22480260"
        ],
        "objectID": "22482257",
        "_highlightResult": {
            "author": {
                "value": "dirtydroog",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "If you used Scylla you'd have only needed 90 <em>nodes</em>. (Don't believe the instability rumours)",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "An Update from Robinhood’s Founders",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://blog.robinhood.com/news/2020/3/3/an-update-from-robinhoods-founders",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T04:55:25.000Z",
        "title": null,
        "url": null,
        "author": "desaiguddu",
        "points": null,
        "story_text": null,
        "comment_text": "SEEKING WORK | Remote | Full-stack Developer<p>Location: Remote | London | South East Asia<p>Agency: Yes<p>Skills:<p><pre><code>  - Frontend: ReactJS, Angular 6+, VueJS, Gatsby, Bootstrap, Webpack, Backbone.js\n  - Backend: Nodejs, Laravel, PHP, Expres\n  - Mobile Native: Swift, Objective-C, Java &amp; Kotlin \n  - Mobile Cross Platform: Flutter, React Native\n  - Database: PostgreSQL, MongoDB, MySQL\n  - Cloud:  Amazon Web Services, Google Cloud, Digital Ocean, Letsencrypt, Mailgun\n  - Frameworks: Stripe, Mailchimp, Express, NextJS, Firebase\n</code></pre>\nPortfolio &amp; Infromation: <a href=\"https:&#x2F;&#x2F;mobilefirst.in\" rel=\"nofollow\">https:&#x2F;&#x2F;mobilefirst.in</a><p>Email: arpan@mobilefirst.in<p>Recent Work:<p>* Working on Publication &amp; Media pipeline management solution<p>* Working on Easy to Use Video Editor which exports to multiple social network-based screen resolutions<p>* Working with NFL &amp; NHL teams Coaching Applications to improve Players Performance, won World (Featured in NYT &amp; WSJ)<p>GitHub: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;mobilefirstinc\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;mobilefirstinc</a>",
        "num_comments": null,
        "story_id": 22465475,
        "story_title": "Ask HN: Freelancer? Seeking freelancer? (March 2020)",
        "story_url": null,
        "parent_id": 22465475,
        "created_at_i": 1583297725,
        "_tags": [
            "comment",
            "author_desaiguddu",
            "story_22465475"
        ],
        "objectID": "22481312",
        "_highlightResult": {
            "author": {
                "value": "desaiguddu",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "SEEKING WORK | Remote | Full-stack Developer<p>Location: Remote | London | South East Asia<p>Agency: Yes<p>Skills:<p><pre><code>  - Frontend: ReactJS, Angular 6+, VueJS, Gatsby, Bootstrap, Webpack, Backbone.js\n  - Backend: <em>Nodejs</em>, Laravel, PHP, Expres\n  - Mobile Native: Swift, Objective-C, Java &amp; Kotlin \n  - Mobile Cross Platform: Flutter, React Native\n  - Database: PostgreSQL, MongoDB, MySQL\n  - Cloud:  Amazon Web Services, Google Cloud, Digital Ocean, Letsencrypt, Mailgun\n  - Frameworks: Stripe, Mailchimp, Express, NextJS, Firebase\n</code></pre>\nPortfolio &amp; Infromation: <a href=\"https://mobilefirst.in\" rel=\"nofollow\">https://mobilefirst.in</a><p>Email: arpan@mobilefirst.in<p>Recent Work:<p>* Working on Publication &amp; Media pipeline management solution<p>* Working on Easy to Use Video Editor which exports to multiple social network-based screen resolutions<p>* Working with NFL &amp; NHL teams Coaching Applications to improve Players Performance, won World (Featured in NYT &amp; WSJ)<p>GitHub: <a href=\"https://github.com/mobilefirstinc\" rel=\"nofollow\">https://github.com/mobilefirstinc</a>",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Ask HN: Freelancer? Seeking freelancer? (March 2020)",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T04:24:35.000Z",
        "title": null,
        "url": null,
        "author": "desaiguddu",
        "points": null,
        "story_text": null,
        "comment_text": "Location: Mumbai, India<p>Remote: Yes<p>Agency: Yes<p>Willing to relocate: Negotiable<p>Technologies: ReactJS, Redux, Laravel, NodeJS, GatsbyJS, PHP, MongoDB, PostgreSQL, Swift, Flutter, React Native<p>Skills: Web Frontend, Mobile Frontend &amp; Backend with NodeJS&#x2F;Laravel<p>Resume: On Request<p>Portfolio: <a href=\"https:&#x2F;&#x2F;www.mobilefirst.in\" rel=\"nofollow\">https:&#x2F;&#x2F;www.mobilefirst.in</a><p>Email: arpan [at] mobilefirst [dot] in<p>10 years of experience in building software tools for startups &amp; SMEs.",
        "num_comments": null,
        "story_id": 22465474,
        "story_title": "Ask HN: Who wants to be hired? (March 2020)",
        "story_url": null,
        "parent_id": 22465474,
        "created_at_i": 1583295875,
        "_tags": [
            "comment",
            "author_desaiguddu",
            "story_22465474"
        ],
        "objectID": "22481186",
        "_highlightResult": {
            "author": {
                "value": "desaiguddu",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Location: Mumbai, India<p>Remote: Yes<p>Agency: Yes<p>Willing to relocate: Negotiable<p>Technologies: ReactJS, Redux, Laravel, <em>NodeJS</em>, GatsbyJS, PHP, MongoDB, PostgreSQL, Swift, Flutter, React Native<p>Skills: Web Frontend, Mobile Frontend &amp; Backend with <em>NodeJS</em>/Laravel<p>Resume: On Request<p>Portfolio: <a href=\"https://www.mobilefirst.in\" rel=\"nofollow\">https://www.mobilefirst.in</a><p>Email: arpan [at] mobilefirst [dot] in<p>10 years of experience in building software tools for startups &amp; SMEs.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Ask HN: Who wants to be hired? (March 2020)",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T03:36:15.000Z",
        "title": null,
        "url": null,
        "author": "barrkel",
        "points": null,
        "story_text": null,
        "comment_text": "How well do those work on a single 8GB node? Because ClickHouse works very well at that scale, with a single C++ executable.<p>There&#x27;s large complexity and cost overheads to Hadoop solutions, and not everyone has actual big data problems. ClickHouse hugely outperforms on query patterns that would devolve into table scans in a row store, while working at row store volumes of data without a bunch of big nodes.",
        "num_comments": null,
        "story_id": 22457767,
        "story_title": "Clickhouse Local",
        "story_url": "https://clickhouse.tech/docs/en/operations/utils/clickhouse-local/",
        "parent_id": 22478688,
        "created_at_i": 1583292975,
        "_tags": [
            "comment",
            "author_barrkel",
            "story_22457767"
        ],
        "objectID": "22481008",
        "_highlightResult": {
            "author": {
                "value": "barrkel",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "How well do those work on a single 8GB node? Because ClickHouse works very well at that scale, with a single C++ executable.<p>There's large complexity and cost overheads to Hadoop solutions, and not everyone has actual big data problems. ClickHouse hugely outperforms on query patterns that would devolve into table scans in a row store, while working at row store volumes of data without a bunch of big <em>nodes</em>.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Clickhouse Local",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://clickhouse.tech/docs/en/operations/utils/clickhouse-local/",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T03:30:45.000Z",
        "title": null,
        "url": null,
        "author": "barrkel",
        "points": null,
        "story_text": null,
        "comment_text": "Low latency query execution and it scales down well to small datasets, are my reasons for really liking it. Top throughout when scanning TB+ of data on multiple nodes isn&#x27;t my use case; it&#x27;s answering a query in web request response times over a few hundred million rows of data.<p>The low latency to query execution is really nice.",
        "num_comments": null,
        "story_id": 22457767,
        "story_title": "Clickhouse Local",
        "story_url": "https://clickhouse.tech/docs/en/operations/utils/clickhouse-local/",
        "parent_id": 22478661,
        "created_at_i": 1583292645,
        "_tags": [
            "comment",
            "author_barrkel",
            "story_22457767"
        ],
        "objectID": "22480984",
        "_highlightResult": {
            "author": {
                "value": "barrkel",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "Low latency query execution and it scales down well to small datasets, are my reasons for really liking it. Top throughout when scanning TB+ of data on multiple <em>nodes</em> isn't my use case; it's answering a query in web request response times over a few hundred million rows of data.<p>The low latency to query execution is really nice.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Clickhouse Local",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://clickhouse.tech/docs/en/operations/utils/clickhouse-local/",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T01:30:01.000Z",
        "title": null,
        "url": null,
        "author": "tbrock",
        "points": null,
        "story_text": null,
        "comment_text": "This happened to us at Hustle years ago. Basically if you run on AWS there’s a DNS server provided inside each VPC that usually works fine but which has no observable load metrics etc... so you don’t really know you are slamming it and are about to have a problem unless you audit your entire codebase.<p>Why? Well that tiny DNS server has certain capacity constraints and if you don’t cache DNS lookups by using a http&#x2F;https agent for example (in NodeJS) you wind up looking up the same dns info over and over and churning sockets like it’s going out of style. If you run really really hot the poor thing falls over (rightly so).<p>The limits are high and DNS is fast so you usually don’t notice but when you are under load bugs like this come out of the woodwork. When it falls down you look up the AWS docs, lean back in your chair upon finding this isn’t an “elastic” part of AWS and say “FUUUUUUUUCK” so loud it can be heard from outer space.<p>If you are Robinhood though don’t you have some former Netflix SRE&#x2F;DevOps beast on staff that knows this and so you run your own DNS and monitor it?",
        "num_comments": null,
        "story_id": 22480260,
        "story_title": "An Update from Robinhood’s Founders",
        "story_url": "https://blog.robinhood.com/news/2020/3/3/an-update-from-robinhoods-founders",
        "parent_id": 22480384,
        "created_at_i": 1583285401,
        "_tags": [
            "comment",
            "author_tbrock",
            "story_22480260"
        ],
        "objectID": "22480423",
        "_highlightResult": {
            "author": {
                "value": "tbrock",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "This happened to us at Hustle years ago. Basically if you run on AWS there’s a DNS server provided inside each VPC that usually works fine but which has no observable load metrics etc... so you don’t really know you are slamming it and are about to have a problem unless you audit your entire codebase.<p>Why? Well that tiny DNS server has certain capacity constraints and if you don’t cache DNS lookups by using a http/https agent for example (in <em>NodeJS</em>) you wind up looking up the same dns info over and over and churning sockets like it’s going out of style. If you run really really hot the poor thing falls over (rightly so).<p>The limits are high and DNS is fast so you usually don’t notice but when you are under load bugs like this come out of the woodwork. When it falls down you look up the AWS docs, lean back in your chair upon finding this isn’t an “elastic” part of AWS and say “FUUUUUUUUCK” so loud it can be heard from outer space.<p>If you are Robinhood though don’t you have some former Netflix SRE/DevOps beast on staff that knows this and so you run your own DNS and monitor it?",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "An Update from Robinhood’s Founders",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://blog.robinhood.com/news/2020/3/3/an-update-from-robinhoods-founders",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-04T00:39:10.000Z",
        "title": null,
        "url": null,
        "author": "artur_makly",
        "points": null,
        "story_text": null,
        "comment_text": "When we launched <a href=\"https:&#x2F;&#x2F;VisualSitemaps.com\" rel=\"nofollow\">https:&#x2F;&#x2F;VisualSitemaps.com</a>, we decided to use D3 since it really showed the site-mapping DataViz[1] really well and even allowed for real-time manipulation ( try drag n droppin the nodes in the demo below )<p>However, it does have its performance degradation once you go beyond 3000 nodes of data. So we are now in the process of rebuilding our mapper in Canvas+WebGL via Pixi.js.<p>[1]<a href=\"https:&#x2F;&#x2F;app.visualsitemaps.com&#x2F;share&#x2F;7b4fd8556b102ed739cc308efdf78c9f\" rel=\"nofollow\">https:&#x2F;&#x2F;app.visualsitemaps.com&#x2F;share&#x2F;7b4fd8556b102ed739cc308...</a>",
        "num_comments": null,
        "story_id": 22476930,
        "story_title": "Introduction to D3",
        "story_url": "https://observablehq.com/@mitvis/introduction-to-d3",
        "parent_id": 22476930,
        "created_at_i": 1583282350,
        "_tags": [
            "comment",
            "author_artur_makly",
            "story_22476930"
        ],
        "objectID": "22480191",
        "_highlightResult": {
            "author": {
                "value": "artur_makly",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "When we launched <a href=\"https://VisualSitemaps.com\" rel=\"nofollow\">https://VisualSitemaps.com</a>, we decided to use D3 since it really showed the site-mapping DataViz[1] really well and even allowed for real-time manipulation ( try drag n droppin the <em>nodes</em> in the demo below )<p>However, it does have its performance degradation once you go beyond 3000 <em>nodes</em> of data. So we are now in the process of rebuilding our mapper in Canvas+WebGL via Pixi.js.<p>[1]<a href=\"https://app.visualsitemaps.com/share/7b4fd8556b102ed739cc308efdf78c9f\" rel=\"nofollow\">https://app.visualsitemaps.com/share/7b4fd8556b102ed739cc308...</a>",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Introduction to D3",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://observablehq.com/@mitvis/introduction-to-d3",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    },
    {
        "created_at": "2020-03-03T23:15:27.000Z",
        "title": null,
        "url": null,
        "author": "TeMPOraL",
        "points": null,
        "story_text": null,
        "comment_text": "&gt; <i>Would you or someone care to elaborate? Do we mean the &#x27;linking&#x27; between &#x27;nodes&#x27; (cells) as an interpreter&#x2F;compiler would do over a file&#x2F;object structure?</i><p>A DAG, or Directed Acyclic Graph. The most familiar example would be dependency graphs between packages. Or the dependency graph of your code (as interpreter&#x2F;compiler would look at it). Or, any dependency graph in general.<p>So the way reactive programming works - whether in React, ObservableHQ, or Excel - is this: you have these computation units (cells, pure functions) which have dependencies and they themselves are dependent upon. This forms your calculation graph, which you calculate by starting at the node without dependencies and evaluating one node after another in topological order[0].<p>The main optimization this permits is reducing the number of calculations: since dependencies are accounted for and navigable, whenever a node X changes, only nodes that depend on it need to be recomputed (and their dependants, recursively).<p>&quot;vectorizing performance, type checking and all&quot; are not related to this concept. Reactive programming deals just with the dependency graph and (re)computing the right amount of nodes in the right order. Contrast that with a typical REPL model (or Jupyter model), where you execute cells one after another in the order you wrote them, and they mutate the global state of the application.<p>RE your side note: yes, the notebook thing is a curious phenomenon, especially in a worse-is-better way (why did it have to be first Python, and now JavaScript?!). It&#x27;s much older than that, though - you could trace its origin through things like Mathcad (essentially a buggy Jupyter requiring lots of clicking, but which produced a convincingly-looking math papers, and could do proper symbolic calculations out of the box), back to the early Lisp era (you don&#x27;t have to type things into a Lisp REPL; if you type them in a file and annotate with comments as you go, you get a half-baked plaintext Jupyter).<p>--<p>[0] - <a href=\"https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Topological_sorting\" rel=\"nofollow\">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Topological_sorting</a> - i.e. you turn a graph into a sequence sorted so that the dependencies come before the things that depend on them.",
        "num_comments": null,
        "story_id": 22476930,
        "story_title": "Introduction to D3",
        "story_url": "https://observablehq.com/@mitvis/introduction-to-d3",
        "parent_id": 22479447,
        "created_at_i": 1583277327,
        "_tags": [
            "comment",
            "author_TeMPOraL",
            "story_22476930"
        ],
        "objectID": "22479653",
        "_highlightResult": {
            "author": {
                "value": "TeMPOraL",
                "matchLevel": "none",
                "matchedWords": []
            },
            "comment_text": {
                "value": "&gt; <i>Would you or someone care to elaborate? Do we mean the 'linking' between '<em>nodes</em>' (cells) as an interpreter/compiler would do over a file/object structure?</i><p>A DAG, or Directed Acyclic Graph. The most familiar example would be dependency graphs between packages. Or the dependency graph of your code (as interpreter/compiler would look at it). Or, any dependency graph in general.<p>So the way reactive programming works - whether in React, ObservableHQ, or Excel - is this: you have these computation units (cells, pure functions) which have dependencies and they themselves are dependent upon. This forms your calculation graph, which you calculate by starting at the node without dependencies and evaluating one node after another in topological order[0].<p>The main optimization this permits is reducing the number of calculations: since dependencies are accounted for and navigable, whenever a node X changes, only <em>nodes</em> that depend on it need to be recomputed (and their dependants, recursively).<p>&quot;vectorizing performance, type checking and all&quot; are not related to this concept. Reactive programming deals just with the dependency graph and (re)computing the right amount of <em>nodes</em> in the right order. Contrast that with a typical REPL model (or Jupyter model), where you execute cells one after another in the order you wrote them, and they mutate the global state of the application.<p>RE your side note: yes, the notebook thing is a curious phenomenon, especially in a worse-is-better way (why did it have to be first Python, and now JavaScript?!). It's much older than that, though - you could trace its origin through things like Mathcad (essentially a buggy Jupyter requiring lots of clicking, but which produced a convincingly-looking math papers, and could do proper symbolic calculations out of the box), back to the early Lisp era (you don't have to type things into a Lisp REPL; if you type them in a file and annotate with comments as you go, you get a half-baked plaintext Jupyter).<p>--<p>[0] - <a href=\"https://en.wikipedia.org/wiki/Topological_sorting\" rel=\"nofollow\">https://en.wikipedia.org/wiki/Topological_sorting</a> - i.e. you turn a graph into a sequence sorted so that the dependencies come before the things that depend on them.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [
                    "nodejs"
                ]
            },
            "story_title": {
                "value": "Introduction to D3",
                "matchLevel": "none",
                "matchedWords": []
            },
            "story_url": {
                "value": "https://observablehq.com/@mitvis/introduction-to-d3",
                "matchLevel": "none",
                "matchedWords": []
            }
        }
    }
];

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    listItemSecondaryAction: {
        visibility: "hidden",
    },
    listItem: {
        "&:hover $listItemSecondaryAction": {
            visibility: "inherit",
        },
        backgroundColor: '#fff',
        border: '1px #ccc',
        "&:hover": {
            backgroundColor: "#fafafa",
        },
    },
    titleTime: {
        fontSize: '13px !important',
        color: '#333 !important'
    },
    author: {
        color: '#999',
        marginLeft: '10px'
    }
}));

export default function NestedList() {
    const classes = useStyles();
    const { hackersNew, confirm, setConfirm } = useContext(AppContextHome);
    const [isClickOnDelete, setIsClickOnDelete] = useState(false);

    const handleHoverIconDelete = () => {
        setIsClickOnDelete(true);
    }

    const handleOutIconDelete = () => {
        setIsClickOnDelete(false);
    }


    const handleDeleteItem = (e) => event => {
        const onConfirm = () => {

            try {
                
            } catch (error) {
                
            }
            // AQUI SE DEBE HACER EL BORRADO DEL REGISTRO CON ASYNC AWAIT 

            setConfirm(undefined);
            setIsClickOnDelete(false);
        }

        const onCancel = () => {
            setConfirm(undefined);
            setIsClickOnDelete(false);
        };

        let confirm = {
            title: `Eliminar registro`,
            message: `Deseas borrar ${e.story_title ? e.story_title : e.title}?`,
            onConfirm,
            onCancel
        };

        setConfirm(confirm);
    }

    const handleClickRow = (e) => event => {
        if(!isClickOnDelete)
            window.open(e.story_url ? e.story_url : e.url, "_blank")
    }

    return (
        <List
            dense
            style={{
                maxHeight: '500px',
                overflow: 'auto'
            }}
        >
            {
                data.map((e, i) => 
                    e.story_title || e.title ?
                    (
                    <div key={i} onClick={(e.url || e.story_url) && handleClickRow(e)} style={{ cursor: e.url || e.story_url ? 'pointer' : 'none' }} title={!e.url && !e.story_url ? "No existe url" : ""}>
                        <ListItem key={e.id} style={{ padding: 10 }} classes={{
                            container: classes.listItem
                        }}>
                            <ListItemAvatar>
                                <Avatar>{e.id}</Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                style={{ display: 'flex' }} primary={<Typography className={classes.titleTime} style={{ width: '86%' }}>{e.story_title ? e.story_title : e.title}<span className={classes.author}>{`- ${e.author} -`}</span></Typography>}
                    secondary={<Typography className={classes.titleTime}>{diffDays(new Date(), e.created_at)}</Typography>}
                            />
                            <ListItemSecondaryAction className={classes.listItemSecondaryAction} onClick={handleDeleteItem(e)} onMouseOut={handleOutIconDelete} onMouseOver={handleHoverIconDelete}>
                                <Tooltip title="Eliminar" aria-label="Eliminar">
                                    <DeleteIcon style={{ cursor: 'pointer', color: 'red', fontSize: '27px' }}></DeleteIcon>
                                </Tooltip>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </div>
                ) : null)

            }
            <Confirm {...confirm} />
        </List>
    );
}
