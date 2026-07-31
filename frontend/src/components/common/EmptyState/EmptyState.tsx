interface EmptyStateProps {
    title: string;
}

const EmptyState = ({ title }: EmptyStateProps) => {
    return (
        <div className="empty-state">
            <h3>{title}</h3>
        </div>
    );
};

export default EmptyState;