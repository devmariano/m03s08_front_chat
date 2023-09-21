import PropTypes from "prop-types";

export default function DynamicAvatar({ nickname }) {
  // Gere a URL da imagem com base no nickname
  const avatarUrl = `https://api.multiavatar.com/${nickname}.svg`;

  return (
    <img
      src={avatarUrl}
      alt={`Avatar de ${nickname}`}
      style={{ width: "50px", height: "50px", borderRadius: "50%" }}
    />
  );
}

DynamicAvatar.propTypes = {
  nickname: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};
