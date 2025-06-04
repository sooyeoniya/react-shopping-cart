import Description from "../../Description/Description";
import * as S from "./EmptyFallback.styles";
import EmptyCart from "/planet-empty-cart.svg";

const EmptyFallback = () => {
  return (
    <S.EmptyFallback>
      <S.EmptyFallbackImage src={EmptyCart} alt="empty-cart" />
      <Description>장바구니에 담은 상품이 없습니다.</Description>
    </S.EmptyFallback>
  );
};

export default EmptyFallback;
