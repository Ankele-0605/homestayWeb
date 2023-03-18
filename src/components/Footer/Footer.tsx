import React from 'react';
import styles from './footer.less'
const Header: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.list}>
                <h3>关于我们</h3>
                <ul>
                    <li><a target='_blank' rel='nofollow'>关于无锡</a></li>
                    <li><a target='_blank' rel='nofollow'>加入我们</a></li>
                    <li><a target='_blank' rel='nofollow'>服务条款</a></li>
                    <li><a target='_blank' rel='nofollow'>退款政策</a></li>

                </ul>
            </div>

            <div className={styles.list}>
                <h3>网站协议</h3>
                <ul>
                    <li><a target='_blank' rel='nofollow'>游客协议</a></li>
                    <li><a target='_blank' rel='nofollow'>隐私保护</a></li>
                    <li><a target='_blank' rel='nofollow'>帮助中心</a></li>
                    <li><a target='_blank' rel='nofollow'>用户反馈</a></li>
                </ul>
            </div>

            <div className={styles.list}>
                <h3>客服服务</h3>
                <ul>
                    <li><a target='_blank' rel='nofollow'>时间（每日8:30-22:00）</a></li>
                    <li><a target='_blank' rel='nofollow'>联系电话：18042067858</a></li>
                    <li><a target='_blank' rel='nofollow'>邮箱：200106@163.com</a></li>
                    <li><a target='_blank' rel='nofollow'>地址：江苏省无锡市新吴区人生路66号</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
