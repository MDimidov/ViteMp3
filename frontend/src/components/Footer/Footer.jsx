import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';


export function Footer() {

    const divMainClass = 'w-1/5'
    const spanClass = 'dark:text-white z'
    const socialsIconClass = 'hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer px-1 py-1 h-min rounded-xl'
    const liClass = 'text-sm text-gray-600 dark:text-gray-400 hover:underline'
    return (
        <div className='flex w-full gap-3'>
            <div className={divMainClass}>
                <span className={spanClass}>Кампания</span>
                <ul>
                    <li className={liClass}><a href="#">Относно</a></li>
                    <li className={liClass}><a href="#">Работа при нас</a></li>
                    <li className={liClass}><a href="#">For the Records</a></li>
                </ul>
            </div>
            <div className={divMainClass}>
                <span className={spanClass}>Общности</span>
                <ul>
                    <li className={liClass}><a href="#">За изпълнители</a></li>
                    <li className={liClass}><a href="#">Разработчици</a></li>
                    <li className={liClass}><a href="#">Реклама</a></li>
                    <li className={liClass}><a href="#">Инвеститори</a></li>
                    <li className={liClass}><a href="#">Доставчици</a></li>
                </ul>
            </div>
            <div className={divMainClass}>
                <span className={spanClass}>Полезни връзки</span>
                <ul>
                    <li className={liClass}><a href="#">Поддръжка</a></li>
                    <li className={liClass}><a href="#">Безплатно мобилно приложение</a></li>
                </ul>
            </div>
            <div className={divMainClass}>
                <span className={spanClass}>ViteMp3 планове</span>
                <ul>
                    <li className={liClass}><a href="#">Premium Individual</a></li>
                    <li className={liClass}><a href="#">Premium Duo</a></li>
                    <li className={liClass}><a href="#">Premium Family</a></li>
                    <li className={liClass}><a href="#">ViteMp3 Free</a></li>
                </ul>
            </div>
            <div className={`${divMainClass} flex`}>
                <a href='#' className={socialsIconClass}><InstagramIcon /></a>
                <a href='#' className={socialsIconClass}><FacebookIcon /></a>
                <a href='#' className={socialsIconClass}><YoutubeIcon /></a>
            </div>
        </div>
    )
}
