import { HiveEngineToken, Token, TokenBalance, TokenMetadata } from "./hiveEngine.types";



export const convertEngineToken = (balanceObj: TokenBalance, token?: Token) => {

    if(!balanceObj){
        return null;
    }
    const tokenMetadata = token && JSON.parse(token.metadata) as TokenMetadata;

    const stake = parseFloat(balanceObj.stake) || 0;
    const delegationsIn = parseFloat(balanceObj.delegationsIn) || 0;
    const delegationsOut = parseFloat(balanceObj.delegationsOut) || 0;
    const balance = parseFloat(balanceObj.balance) || 0;
 
    return {
        symbol:balanceObj.symbol,
        name:token?.name || "",
        icon:tokenMetadata?.icon || "",
        precision:token?.precision || 0,
        stakingEnabled:token?.stakingEnabled || false,
        delegationEnabled:token?.delegationEnabled || false,
        stakedBalance:stake + delegationsIn - delegationsOut,
        balance,
        stake,
        delegationsIn,
        delegationsOut,
    } as HiveEngineToken


}