(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Y = exports.X = exports.WRITE_PIN_ACTION = exports.WHILE = exports.WHERE2 = exports.WHERE1 = exports.WHEEL_DIAMETER = exports.WAVE_LENGTH = exports.WAIT_TIME_STMT = exports.WAIT_STMT = exports.VOLUME = exports.VAR_DECLARATION = exports.VAR = exports.VALUES = exports.VALUE = exports.UP = exports.UNTIL = exports.UNARY = exports.ULTRASONIC = exports.TYPE = exports.TURN_RATIO = exports.TURN_LIGHT = exports.TURN_DIRECTION = exports.TURN_ACTION = exports.TRACKWIDTH = exports.TOUCH = exports.TONE_ACTION = exports.TIMER_SENSOR_RESET = exports.TIMES = exports.TIMER = exports.TIME = exports.THEN_STMTS = exports.THEN_LIST = exports.TEXT_JOIN = exports.TEXT_APPEND = exports.TEXT = exports.TERNARY_EXPR = exports.TEMPERATURE = exports.TERMINATE_BLOCK = exports.SUM = exports.STRING_CONST = exports.STRING = exports.STOP_DRIVE = exports.STOP = exports.STMT_LIST = exports.STD_DEV = exports.STATUS_LIGHT_ACTION = exports.STATEMENTS = exports.SPEED_R = exports.SPEED_ONLY = exports.SPEED_L = exports.SPEED = exports.SOUND = exports.SLOT = exports.SIZE = exports.SINGLE_FUNCTION = exports.SHOW_TEXT_ACTION = exports.SHOW_IMAGE_ACTION = exports.SHAKE = exports.SET_VOLUME_ACTION = exports.SET_LANGUAGE_ACTION = exports.SET = exports.SERIAL_WRITE_ACTION = exports.SENSOR_TYPE = exports.SENSOR_MODE = exports.SEEK = exports.SAY_TEXT_ACTION = exports.ROTATIONS = exports.ROTATION = exports.RIGHT = exports.RGB_COLOR_CONST = exports.RGB = exports.RETURN_TYPE = exports.RETURN = exports.RESET = exports.REPEAT_STMT_CONTINUATION = exports.REPEAT_STMT = exports.REMOVE = exports.RED = exports.RATE = exports.RANDOM_INT = exports.RANDOM_DOUBLE = exports.RANDOM = exports.PRESENCE = exports.POWER = exports.POSITION = exports.PORT_B = exports.PORT_A = exports.PORT = exports.PLAY_NOTE_ACTION = exports.PLAY_FILE_ACTION = exports.PIXEL = exports.PITCH = exports.PIN_WRITE_VALUE_SENSOR = exports.PIN_TOUCH_SENSOR = exports.PIN_GET_VALUE_SENSOR = exports.PIN = exports.PILOT = exports.PICTURE = exports.PC = exports.PARAMETERS = exports.ORANGE = exports.OR = exports.OPCODE = exports.END = exports.STEP = exports.PROGRAM_COUNTER = exports.OPS = exports.OP = exports.ON = exports.OFF = exports.NUM_CONST = exports.NUMERIC = exports.NUMBER = exports.NULL_CONST = exports.NO = exports.NOT = exports.NOOP_STMT = exports.NEQ = exports.NEG = exports.NAMES = exports.NAME = exports.N = exports.MULTIPLY = exports.MSG = exports.MOTOR_B = exports.MOTOR_AB = exports.MOTOR_A = exports.MOTOR_STOP = exports.MOTOR_SIDE = exports.MOTOR_SET_POWER = exports.MOTOR_RIGHT = exports.MOTOR_ON_ACTION = exports.MOTOR_MOVE_MODE = exports.MOTOR_LEFT = exports.MOTOR_GET_POWER = exports.MOTOR_DURATION_VALUE = exports.MOTOR_DURATION = exports.MOTOR_ACTION = exports.MODE = exports.MOD = exports.MINUS = exports.MIN = exports.METHOD_VOID = exports.METHOD_RETURN = exports.METHOD_CALL_VOID = exports.METHOD_CALL_RETURN = exports.MEDIAN = exports.MAX_WIDTH = exports.MAX_ROTATION = exports.MAX_HEIGHT = exports.MAXPOWER = exports.MAXDIAG = exports.MAX = exports.MATH_CONSTRAIN_FUNCTION = exports.MATH_PROP_FUNCT = exports.MATH_ON_LIST = exports.MATH_CONST = exports.MATH_CHANGE = exports.LTE = exports.LT = exports.LOOP_NUMBER = exports.LOCATION = exports.LIST_LENGTH = exports.LIST_IS_EMPTY = exports.LIST_FIND_ITEM = exports.LIST_SET_INDEX = exports.LIST_GET_SUBLIST = exports.LIST_GET_INDEX_STMT = exports.LIST_GET_INDEX = exports.LIST_OPERATION = exports.LIST = exports.LIGHT_ACTION = exports.LIGHT = exports.LEFT = exports.LED_ON_ACTION = exports.LED_OFF_ACTION = exports.LED_COLOR_CONST = exports.LAST = exports.LANGUAGE = exports.KIND = exports.ITEM = exports.INSERT = exports.INITIATE_BLOCK = exports.INFRARED = exports.IN = exports.IMAGE_SHIFT_ACTION = exports.IMAGE_INVERT_ACTION = exports.IMAGE_CONST = exports.IMAGE = exports.IF_TRUE_STMT = exports.IF_STMT = exports.IF_RETURN = exports.GYRO_SENSOR_RESET = exports.GYRO = exports.GTE = exports.GT = exports.GREEN = exports.GET_VOLUME = exports.GET_SAMPLE = exports.GET_REMOVE = exports.GET_GYRO_SENSOR_SAMPLE = exports.GET = exports.GESTURE = exports.FUNCTION_DECLARATION = exports.FRONT = exports.FROM_START = exports.FROM_END = exports.FREQUENCY = exports.FREEFALL = exports.FOR_EACH = exports.FOREWARD = exports.FOREVER = exports.FOR = exports.FLOW_CONTROL = exports.FLASH = exports.FIRST = exports.FILE = exports.FACE_UP = exports.FACE_DOWN = exports.EXPR_LIST = exports.EXPR = exports.ESCAPE = exports.EQ = exports.ENTER = exports.ENCODER_SENSOR_SAMPLE = exports.ENCODER_SENSOR_RESET = exports.ENC = exports.ELSE_STMTS = exports.EACH_COUNTER = exports.DURATION = exports.DRIVE_DIRECTION = exports.DRIVE_ACTION = exports.DOWN = exports.DOUBLE_FLASH = exports.DIVIDE = exports.DISTANCE = exports.DISPLAY_TEXT_ACTION = exports.DISPLAY_SET_PIXEL_BRIGHTNESS_ACTION = exports.DISPLAY_SET_BRIGHTNESS_ACTION = exports.DISPLAY_IMAGE_ACTION = exports.DISPLAY_GET_PIXEL_BRIGHTNESS_ACTION = exports.DISPLAY_GET_BRIGHTNESS_ACTION = exports.DISPLAY = exports.DIRECTION = exports.DIGITAL = exports.DEGREE = exports.DEBUG_STEP_INTO = exports.DEBUG_STEP_OVER = exports.DEBUG_BREAKPOINT = exports.DEBUG_ACTION = exports.CURVE_ACTION = exports.CREATE_LIST_WITH_ITEM = exports.CREATE_LIST_REPEAT = exports.CREATE_LIST = exports.CREATE_DEBUG_ACTION = exports.CONTINUE = exports.COMPASS = exports.COMMENT = exports.COLOUR = exports.CONDITIONAL = exports.COLOR_CONST = exports.COLOR = exports.CLEAR_DISPLAY_ACTION = exports.CHARACTER = exports.CAST_CHAR_NUMBER = exports.CAST_STRING_NUMBER = exports.CAST_STRING = exports.CAST_CHAR = exports.BUTTON_B = exports.BUTTON_A = exports.BUTTONS = exports.BOTH_MOTORS_ON_ACTION = exports.BRIGHTNESS_MULTIPLIER = exports.BRIGHTNESS = exports.BREAK = exports.BOOL_CONST = exports.BOOLEAN = exports.BLOCK_ID = exports.BINARY = exports.BACK = exports.BACKWARD = exports.AVERAGE = exports.AT2 = exports.AT1 = exports.ASSIGN_STMT = exports.ASSIGN_METHOD_PARAMETER_STMT = exports.ASSERT_ACTION = exports.ARG2 = exports.ARG1 = exports.ANY = exports.ANIMATION = exports.ANGLE = exports.AND = exports.ANALOG = exports.AMBIENTLIGHT = exports.ADD = void 0;
    exports.ADD = "ADD";
    exports.AMBIENTLIGHT = "ambientlight";
    exports.ANALOG = "analog";
    exports.AND = "AND";
    exports.ANGLE = "angle";
    exports.ANIMATION = "animation";
    exports.ANY = "ANY";
    exports.ARG1 = "arg1";
    exports.ARG2 = "arg2";
    exports.ASSERT_ACTION = "AssertAction";
    exports.ASSIGN_METHOD_PARAMETER_STMT = "AssignMethodParameter";
    exports.ASSIGN_STMT = "AssignStmt";
    exports.AT1 = "at1";
    exports.AT2 = "at2";
    exports.AVERAGE = "average";
    exports.BACKWARD = "backward";
    exports.BACK = "back";
    exports.BINARY = "Binary";
    exports.BLOCK_ID = "BLOCK_ID";
    exports.BOOLEAN = "BOOLEAN";
    exports.BOOL_CONST = "BOOL_CONST";
    exports.BREAK = "break";
    exports.BRIGHTNESS = "brightness";
    exports.BRIGHTNESS_MULTIPLIER = 28.3333;
    exports.BOTH_MOTORS_ON_ACTION = "bothMotorsOnAction";
    exports.BUTTONS = "buttons";
    exports.BUTTON_A = "A";
    exports.BUTTON_B = "B";
    exports.CAST_CHAR = "mathCastCharFunct";
    exports.CAST_STRING = "mathCastStringFunct";
    exports.CAST_STRING_NUMBER = "textStringCastNumberFunct";
    exports.CAST_CHAR_NUMBER = "textCharCastNumberFunct";
    exports.CHARACTER = "character";
    exports.CLEAR_DISPLAY_ACTION = "ClearDisplay";
    exports.COLOR = "color";
    exports.COLOR_CONST = "COLOR_CONST";
    exports.CONDITIONAL = "conditional";
    exports.COLOUR = "colorValue";
    exports.COMMENT = "comment";
    exports.COMPASS = "compass";
    exports.CONTINUE = "continue";
    exports.CREATE_DEBUG_ACTION = "CreateDebugAction";
    exports.CREATE_LIST = "createList";
    exports.CREATE_LIST_REPEAT = "createListREPEAT";
    exports.CREATE_LIST_WITH_ITEM = "createCreateListWithItem";
    exports.CURVE_ACTION = "CurveAction";
    exports.DEBUG_ACTION = "DebugAction";
    exports.DEBUG_BREAKPOINT = "DebugBreakpoint";
    exports.DEBUG_STEP_OVER = "DebugStepOver";
    exports.DEBUG_STEP_INTO = "DebugStepInto";
    exports.DEGREE = "degree";
    exports.DIGITAL = "digital";
    exports.DIRECTION = "direction";
    exports.DISPLAY = "display";
    exports.DISPLAY_GET_BRIGHTNESS_ACTION = "displayGetBrightnessAction";
    exports.DISPLAY_GET_PIXEL_BRIGHTNESS_ACTION = "displayGetPixelBrightnessAction";
    exports.DISPLAY_IMAGE_ACTION = "DisplayImageAction";
    exports.DISPLAY_SET_BRIGHTNESS_ACTION = "displaySetBrightnessAction";
    exports.DISPLAY_SET_PIXEL_BRIGHTNESS_ACTION = "displaySetPixelBrightnessAction";
    exports.DISPLAY_TEXT_ACTION = "displayTextAction";
    exports.DISTANCE = "distance";
    exports.DIVIDE = "DIVIDE";
    exports.DOUBLE_FLASH = "double_flash";
    exports.DOWN = "DOWN";
    exports.DRIVE_ACTION = "DriveAction";
    exports.DRIVE_DIRECTION = "driveDirection";
    exports.DURATION = "duration";
    exports.EACH_COUNTER = "eachcounter";
    exports.ELSE_STMTS = "elseStmts";
    exports.ENC = 360.0 / (3.0 * Math.PI * 5.6);
    exports.ENCODER_SENSOR_RESET = "encoderSensorReset";
    exports.ENCODER_SENSOR_SAMPLE = "encoder";
    exports.ENTER = "enter";
    exports.EQ = "EQ";
    exports.ESCAPE = "escape";
    exports.EXPR = "expr";
    exports.EXPR_LIST = "exprList";
    exports.FACE_DOWN = "face_down";
    exports.FACE_UP = "face_up";
    exports.FILE = "file";
    exports.FIRST = "first";
    exports.FLASH = "flash";
    exports.FLOW_CONTROL = "flowControl";
    exports.FOR = "FOR";
    exports.FOREVER = "FOREVER";
    exports.FOREWARD = "FOREWARD";
    exports.FOR_EACH = "FOR_EACH";
    exports.FREEFALL = "freefall";
    exports.FREQUENCY = "frequency";
    exports.FROM_END = "from_end";
    exports.FROM_START = "from_start";
    exports.FRONT = "FRONT";
    exports.FUNCTION_DECLARATION = "functionDeclaration";
    exports.GESTURE = "gesture";
    exports.GET = "get";
    exports.GET_GYRO_SENSOR_SAMPLE = "gyroSensorSample";
    exports.GET_REMOVE = "get_remove";
    exports.GET_SAMPLE = "GetSample";
    exports.GET_VOLUME = "GetVolume";
    exports.GREEN = "GREEN";
    exports.GT = "GT";
    exports.GTE = "GTE";
    exports.GYRO = "gyro";
    exports.GYRO_SENSOR_RESET = "createResetGyroSensor";
    exports.IF_RETURN = "createMethodIfReturn";
    exports.IF_STMT = "IfStatement";
    exports.IF_TRUE_STMT = "IfTrueStatement";
    exports.IMAGE = "image";
    exports.IMAGE_CONST = "image";
    exports.IMAGE_INVERT_ACTION = "ImageInvertAction";
    exports.IMAGE_SHIFT_ACTION = "ImageShiftAction";
    exports.IN = "in";
    exports.INFRARED = "infrared";
    exports.INITIATE_BLOCK = "INITIATE_BLOCK";
    exports.INSERT = "insert";
    exports.ITEM = "item";
    exports.KIND = "kind";
    exports.LANGUAGE = "language";
    exports.LAST = "last";
    exports.LED_COLOR_CONST = "ledColor";
    exports.LED_OFF_ACTION = "ledOffAction";
    exports.LED_ON_ACTION = "ledOnAction";
    exports.LEFT = "left";
    exports.LIGHT = "light";
    exports.LIGHT_ACTION = "lightAction";
    exports.LIST = "list";
    exports.LIST_OPERATION = "list_operation";
    exports.LIST_GET_INDEX = "list_get_index";
    exports.LIST_GET_INDEX_STMT = "list_get_index_stmt";
    exports.LIST_GET_SUBLIST = "list_get_sub_list";
    exports.LIST_SET_INDEX = "list_set_index";
    exports.LIST_FIND_ITEM = "list_find_item";
    exports.LIST_IS_EMPTY = "list_is_empty";
    exports.LIST_LENGTH = "list_length";
    exports.LOCATION = "location";
    exports.LOOP_NUMBER = "loopNumber";
    exports.LT = "LT";
    exports.LTE = "LTE";
    exports.MATH_CHANGE = "mathChange";
    exports.MATH_CONST = "createMathConstant";
    exports.MATH_ON_LIST = "createMathOnList";
    exports.MATH_PROP_FUNCT = "MathPropFunct";
    exports.MATH_CONSTRAIN_FUNCTION = "MathConstrainFunct";
    exports.MAX = "max";
    exports.MAXDIAG = 2500;
    // MAXPOWER is a double expression
    exports.MAXPOWER = 0.351858377 * 3;
    exports.MAX_HEIGHT = 1000;
    exports.MAX_ROTATION = 2.0;
    exports.MAX_WIDTH = 2000;
    exports.MEDIAN = "median";
    exports.METHOD_CALL_RETURN = "createMethodCallReturn";
    exports.METHOD_CALL_VOID = "createMethodCallVoid";
    exports.METHOD_RETURN = "createMethodReturn";
    exports.METHOD_VOID = "createMethodVoid";
    exports.MIN = "min";
    exports.MINUS = "MINUS";
    exports.MOD = "MOD";
    exports.MODE = "mode";
    exports.MOTOR_ACTION = "motorAction";
    exports.MOTOR_DURATION = "motorDuration";
    exports.MOTOR_DURATION_VALUE = "motorDurationValue";
    exports.MOTOR_GET_POWER = "motorGetPowerAction";
    exports.MOTOR_LEFT = "c";
    exports.MOTOR_MOVE_MODE = "motorMoveMode";
    exports.MOTOR_ON_ACTION = "motorOnAction";
    exports.MOTOR_RIGHT = "b";
    exports.MOTOR_SET_POWER = "motorSetPowerAction";
    exports.MOTOR_SIDE = "motorSide";
    exports.MOTOR_STOP = "motorStop";
    exports.MOTOR_A = "a";
    exports.MOTOR_AB = "ab";
    exports.MOTOR_B = "b";
    exports.MSG = "msg";
    exports.MULTIPLY = "MULTIPLY";
    exports.N = "n";
    exports.NAME = "name";
    exports.NAMES = "names";
    exports.NEG = "NEG";
    exports.NEQ = "NEQ";
    exports.NOOP_STMT = "createNoopStmt";
    exports.NOT = "NOT";
    exports.NO = "NO";
    exports.NULL_CONST = "null";
    exports.NUMBER = "NUMBER";
    exports.NUMERIC = "Numeric";
    exports.NUM_CONST = "NUM_CONST";
    exports.OFF = "off";
    exports.ON = "on";
    exports.OP = "op";
    exports.OPS = "ops";
    exports.PROGRAM_COUNTER = "pc";
    exports.STEP = "step";
    exports.END = "end";
    exports.OPCODE = "opc";
    exports.OR = "OR";
    exports.ORANGE = "ORANGE";
    exports.PARAMETERS = "parameters";
    exports.PC = "pc";
    exports.PICTURE = "picture";
    exports.PILOT = "pilot";
    exports.PIN = "pin";
    exports.PIN_GET_VALUE_SENSOR = "createPinGetValueSensor";
    exports.PIN_TOUCH_SENSOR = "createPinTouchSensor";
    exports.PIN_WRITE_VALUE_SENSOR = "createPinWriteValueSensor";
    exports.PITCH = "pitch";
    exports.PIXEL = "pixel";
    exports.PLAY_FILE_ACTION = "PlayFileAction";
    exports.PLAY_NOTE_ACTION = "playNoteAction";
    exports.PORT = "port";
    exports.PORT_A = "portA";
    exports.PORT_B = "portB";
    exports.POSITION = "position";
    exports.POWER = "POWER";
    exports.PRESENCE = "presence";
    exports.RANDOM = "random";
    exports.RANDOM_DOUBLE = "randDouble";
    exports.RANDOM_INT = "randInt";
    exports.RATE = "rate";
    exports.RED = "red";
    exports.REMOVE = "remove";
    exports.REPEAT_STMT = "RepeatStmt";
    exports.REPEAT_STMT_CONTINUATION = "RepeatStmtCont";
    exports.RESET = "reset";
    exports.RETURN = "return";
    exports.RETURN_TYPE = "returnType";
    exports.RGB = "rgb";
    exports.RGB_COLOR_CONST = "rgbColor";
    exports.RIGHT = "right";
    exports.ROTATION = "rotation";
    exports.ROTATIONS = "rotations";
    exports.SAY_TEXT_ACTION = "SayTextAction";
    exports.SEEK = "presence";
    exports.SENSOR_MODE = "sensorMode";
    exports.SENSOR_TYPE = "sensorType";
    exports.SERIAL_WRITE_ACTION = "serialWriteAction";
    exports.SET = "set";
    exports.SET_LANGUAGE_ACTION = "SetLanguageAction";
    exports.SET_VOLUME_ACTION = "SetVolumeAction";
    exports.SHAKE = "shake";
    exports.SHOW_IMAGE_ACTION = "ShowImageAction";
    exports.SHOW_TEXT_ACTION = "ShowTextAction";
    exports.SINGLE_FUNCTION = "SingleFunction";
    exports.SIZE = "size";
    exports.SLOT = "slot";
    exports.SOUND = "sound";
    exports.SPEED = "speed";
    exports.SPEED_L = "speedL";
    exports.SPEED_ONLY = "speedOnly";
    exports.SPEED_R = "speedR";
    exports.STATEMENTS = "statements";
    exports.STATUS_LIGHT_ACTION = "statusLightAction";
    exports.STD_DEV = "std_dev";
    exports.STMT_LIST = "stmtList";
    exports.STOP = "stop";
    exports.STOP_DRIVE = "stopDrive";
    exports.STRING = "STRING";
    exports.STRING_CONST = "STRING_CONST";
    exports.SUM = "sum";
    exports.TERMINATE_BLOCK = "TERMINATE_BLOCK";
    exports.TEMPERATURE = "temperature";
    exports.TERNARY_EXPR = "createTernaryExpr";
    exports.TEXT = "text";
    exports.TEXT_APPEND = "textAppend";
    exports.TEXT_JOIN = "createTextJoin";
    exports.THEN_LIST = "thenList";
    exports.THEN_STMTS = "thenStmts";
    exports.TIME = "time";
    exports.TIMER = "timer";
    exports.TIMES = "TIMES";
    exports.TIMER_SENSOR_RESET = "createResetTimer";
    exports.TONE_ACTION = "ToneAction";
    exports.TOUCH = "touch";
    exports.TRACKWIDTH = 40;
    exports.TURN_ACTION = "TurnAction";
    exports.TURN_DIRECTION = "turnDirection";
    exports.TURN_LIGHT = "turnLight";
    exports.TURN_RATIO = (40 / 3.) / 2.8;
    exports.TYPE = "type";
    exports.ULTRASONIC = "ultrasonic";
    exports.UNARY = "Unary";
    exports.UNTIL = "UNTIL";
    exports.UP = "UP";
    exports.VALUE = "value";
    exports.VALUES = "values";
    exports.VAR = "Var";
    exports.VAR_DECLARATION = "VarDeclaration";
    exports.VOLUME = "volume";
    exports.WAIT_STMT = "WaitStmt";
    exports.WAIT_TIME_STMT = "WaitTimeSTMT";
    exports.WAVE_LENGTH = 60;
    exports.WHEEL_DIAMETER = 5.6;
    exports.WHERE1 = "where1";
    exports.WHERE2 = "where2";
    exports.WHILE = "WHILE";
    exports.WRITE_PIN_ACTION = "writePinAction";
    exports.X = "x";
    exports.Y = "y";
});
