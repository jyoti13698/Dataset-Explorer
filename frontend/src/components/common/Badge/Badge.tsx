import "./Badge.scss";

interface BadgeProps {
    text: string;
}

const badgeThemes = [
    "blue",
    "green",
    "purple",
    "orange",
    "red",
    "pink",
    "cyan",
    "indigo",
    "amber",
    "teal"
];

const getBadgeTheme = (text: string) => {
    let hash = 0;

    for (let i = 0; i < text.length; i++) {
        hash += text.charCodeAt(i);
    }

    return badgeThemes[hash % badgeThemes.length];
};

const Badge = ({ text }: BadgeProps) => {
    return (
        <span className={`badge ${getBadgeTheme(text)}`}>
            {text}
        </span>
    );
};

export default Badge;