package de.fhg.iais.roberta.ast.typecheck;

import java.util.HashMap;
import java.util.Map;

public class TypeTransformations {
    private static final Map<String, TypeSignature> BINARIES = new HashMap<>();
    private static final Map<String, TypeSignature> FUNCTIONS = new HashMap<>();
    private static final Map<String, BlocklyType> CONSTANTS = new HashMap<>();

    static {
        BINARIES.put("+", TypeSignature.of(BlocklyType.NUMERIC, BlocklyType.NUMERIC, BlocklyType.NUMERIC));
        BINARIES.put("-", TypeSignature.of(BlocklyType.NUMERIC, BlocklyType.NUMERIC, BlocklyType.NUMERIC));
        BINARIES.put("*", TypeSignature.of(BlocklyType.NUMERIC, BlocklyType.NUMERIC, BlocklyType.NUMERIC));
        BINARIES.put("/", TypeSignature.of(BlocklyType.NUMERIC, BlocklyType.NUMERIC, BlocklyType.NUMERIC));
        BINARIES.put("^", TypeSignature.of(BlocklyType.NUMERIC, BlocklyType.NUMERIC, BlocklyType.NUMERIC));
        BINARIES.put("&&", TypeSignature.of(BlocklyType.BOOL, BlocklyType.BOOL, BlocklyType.BOOL));
        BINARIES.put("||", TypeSignature.of(BlocklyType.BOOL, BlocklyType.BOOL, BlocklyType.BOOL));
        BINARIES.put("<", TypeSignature.of(BlocklyType.NUMERIC, BlocklyType.NUMERIC, BlocklyType.BOOL));
        BINARIES.put("<=", TypeSignature.of(BlocklyType.NUMERIC, BlocklyType.NUMERIC, BlocklyType.BOOL));
        BINARIES.put(">", TypeSignature.of(BlocklyType.NUMERIC, BlocklyType.NUMERIC, BlocklyType.BOOL));
        BINARIES.put(">=", TypeSignature.of(BlocklyType.NUMERIC, BlocklyType.NUMERIC, BlocklyType.BOOL));
        BINARIES.put("==", TypeSignature.of(BlocklyType.BOOL, BlocklyType.CAPTURED_TYPE, BlocklyType.CAPTURED_TYPE));
        BINARIES.put("!=", TypeSignature.of(BlocklyType.BOOL, BlocklyType.CAPTURED_TYPE, BlocklyType.CAPTURED_TYPE));

        FUNCTIONS.put("SIN", TypeSignature.of(BlocklyType.NUMERIC, BlocklyType.NUMERIC));

        CONSTANTS.put("PI", BlocklyType.NUMERIC);
    }

    /**
     * get the signature. The caller has to check for <code>null</code>!
     * 
     * @param functionName whose signature is requested
     * @return the signature; if not found, return <code>null</code>
     */
    public static TypeSignature getFunctionSignature(String functionName) {
        return FUNCTIONS.get(functionName);
    }

    /**
     * get the type. The caller has to check for <code>null</code>!
     * 
     * @param constantName whose type is requested
     * @return the type; if not found, return <code>null</code>
     */
    public static BlocklyType getConstantSignature(String constantName) {
        return CONSTANTS.get(constantName);
    }

    /**
     * get the signature. The caller has to check for <code>null</code>!
     * 
     * @param binaryName whose signature is requested
     * @return the signature; if not found, return <code>null</code>
     */
    public static TypeSignature getBinarySignature(String binaryName) {
        return BINARIES.get(binaryName);
    }
}
