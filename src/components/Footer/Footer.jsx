import PlayBtn from '../../assets/play-btn.svg'

export function FooterMusic() {

    return (
        <>
            <footer className="h-16 dark:bg-[#18181A] text-white bottom-0 w-full fixed flex-center-between px-0.5">
                <div>
                    test
                </div>
                <div>
                    <div>
                        <button className="w-3 h-3 pb-1 mb-9">
                            <img src={PlayBtn} alt="play-btn" className='size-8' />
                        </button>
                    </div>
                </div>
                <div>
                    test
                </div>
            </footer>
        </>
    );
}
