import styles from '../../../styles/AuthForm.module.css';

interface FormGroupProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = ({ label, type, id, value, onChange, required }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormGroup;
