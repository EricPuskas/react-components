'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styles = require('@material-ui/core/styles');
var core = require('@material-ui/core');
var CircularProgress = require('@material-ui/core/CircularProgress');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var CircularProgress__default = /*#__PURE__*/_interopDefaultLegacy(CircularProgress);

/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
/**
 * Styles the component
 */
var useStyles$1 = styles.makeStyles(function (theme) { return ({
    TestComponent: {
        background: theme.palette.success.main
    }
}); });

var TestComponent = function (props) {
    /**
     * Gets the component styles
     */
    var classes = useStyles$1();
    return (React__default['default'].createElement("div", { className: classes.TestComponent },
        React__default['default'].createElement("h1", null, "I'm the test component")));
};

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
/**
 * Styles the component
 */
var useStyles = styles.makeStyles(function (theme) { return ({
    Button: {
        padding: "10px 16px",
        fontSize: "0.95rem",
        minWidth: 40,
        minHeight: 40,
        borderRadius: 4,
        fontWeight: 500,
        lineHeight: "normal",
        boxShadow: "none",
        textTransform: "none",
        maxHeight: 40,
        "&:hover": {
            boxShadow: "none"
        }
    },
    primary: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        border: "1px solid " + theme.palette.primary.dark,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark
        }
    },
    secondary: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.secondary.main,
        border: "1px solid " + theme.palette.secondary.dark,
        "&:hover": {
            backgroundColor: theme.palette.secondary.dark
        }
    },
    default: {
        color: theme.palette.common.black,
        backgroundColor: theme.palette.common.white,
        border: "1px solid " + theme.palette.common.black,
        "&:hover": {
            backgroundColor: theme.palette.grey[50]
        }
    },
    edit: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.warning.main,
        "&:hover": {
            backgroundColor: theme.palette.warning.light
        }
    },
    delete: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.error.main,
        "&:hover": {
            backgroundColor: theme.palette.error.dark
        }
    },
    create: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.success.main,
        "&:hover": {
            backgroundColor: theme.palette.success.dark
        }
    },
    loading: {
        padding: "6px 16px"
    },
    progress: {
        color: theme.palette.common.white
    },
    progressDark: {
        color: theme.palette.secondary.dark
    }
}); });

/**
 * Defines the default props
 */
var defaultProps = {
    type: "button",
    fullWidth: false,
    className: "",
    variant: "default",
    label: "",
    onClick: function () { },
    loading: false
};
/**
 * Displays the component
 */
var Button = React.forwardRef(function (props, ref) {
    var _a, _b;
    var type = props.type, fullWidth = props.fullWidth, variant = props.variant, className = props.className, children = props.children, label = props.label, onClick = props.onClick, loading = props.loading, prefix = props.prefix, suffix = props.suffix;
    /**
     * Gets the component styles
     */
    var classes = useStyles();
    /**
     * Defines the button classes
     */
    var buttonClasses = clsx(classes.Button, classes[variant], (_a = {},
        _a[className] = className,
        _a[classes.loading] = loading,
        _a));
    /**
     * Defines the progress classes
     */
    var progressClasses = clsx(classes.progress, (_b = {},
        _b[classes.progressDark] = variant === "default",
        _b));
    /**
     * Handles rendering the button content
     */
    var renderButtonContent = function () {
        if (loading)
            return React__default['default'].createElement(CircularProgress__default['default'], { size: 22, className: progressClasses });
        if (prefix || suffix) {
            return (React__default['default'].createElement(React.Fragment, null,
                prefix,
                label ? label : children,
                suffix));
        }
        return label ? label : children;
    };
    return (React__default['default'].createElement(core.Button, { ref: ref, className: buttonClasses, type: type, variant: "contained", fullWidth: fullWidth, onClick: onClick }, renderButtonContent()));
});
Button.defaultProps = defaultProps;

exports.Button = Button;
exports.TestComponent = TestComponent;
//# sourceMappingURL=index.js.map
