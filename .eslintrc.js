module.exports = {
    'extends': 'standard',
    'plugins': [
        'standard',
        'promise'
    ],
    'rules': {
    	'indent': ['error', 4],
    	"semi": [
	        "error",
	        "always"
	      ],
	    "one-var": [
	        "error",
	        {
	          "initialized": "always",
	          "uninitialized": "always"
	        }
	    ],
	    "block-scoped-var": [
	    	"error"
	    ]
    }
};
