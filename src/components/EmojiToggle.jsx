import { useState } from "react"
import ArrowDown from "assets/images/ic_arrow_down.svg";
import ArrowTop from "assets/images/ic_arrow_top.svg";
import "components/EmojiToggle";
function EmojiToggle() {
    // 롤링 페이퍼의 모든 이모지 데이터 받아오는거 추가
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen(!isOpen);
    }

    const testemoji = "👌";
    const testcount = [1, 2, 3, 4];
    return (
        <div className="emojilistlayer">
            <button className="emojitoggle" onClick={onToggle}>
                <img src={isOpen ? ArrowDown : ArrowTop} alt="이모지토글" className="arrow" />
            </button>
            {
                isOpen && (
                    <div className="allemojilist">
                        {/* 반복문으로 이모지 데이터 접근 */}
                        {testcount.map((a, index) => (
                            <div className="emoji">
                                {testemoji}
                                {a}
                            </div>
                        ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default EmojiToggle;