import { useState, useEffect } from 'react';
import style from './Admin.module.css';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const navigate=useNavigate()
  const binId = '681e8f438561e97a5010d168';
  const apiKey = '$2a$10$TirNs59Qi3Qh3dKcRHAqh.TSvGR3IaH72vYPOM9AYWc0Bo/iJZawC';
  const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;

  const statusOptions = [
    { value: 'all', label: 'Hamısı' },
    { value: 'pending', label: 'Baxılmayıb' },
    { value: 'reviewed', label: 'Baxılıb' },
    { value: 'resolved', label: 'Həll edilib' },
    { value: 'rejected', label: 'Rədd edilib' }
  ];

  const getStatusClass = (status) => {
    const statusMap = {
      'pending': 'pending',
      'reviewed': 'reviewed',
      'resolved': 'resolved',
      'rejected': 'rejected'
    };
    return statusMap[status] || '';
  };
  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/mescidvideosu'); // Əgər React Router istifadə edirsinizsə
    // window.location.href = '/login'; // Əgər Router istifadə etmirsinizsə
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(apiUrl, {
        headers: {
          'X-Master-Key': apiKey,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Məlumatlar alınarkən xəta baş verdi');

      const { record } = await response.json();
      setMessages(record?.Messages || []);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateMessageStatus = async (messageId, newStatus) => {
    try {
      setError(null);
      
      const response = await fetch(apiUrl, {
        headers: {
          'X-Master-Key': apiKey,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Məlumat oxunarkən xəta baş verdi');

      const { record } = await response.json();
      const currentMessages = record?.Messages || [];

      const updatedMessages = currentMessages.map(msg => 
        msg.id === messageId ? { ...msg, Status: newStatus } : msg
      );

      const updateResponse = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'X-Master-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Messages: updatedMessages })
      });

      if (!updateResponse.ok) throw new Error('Məlumat yenilənərkən xəta baş verdi');

      setMessages(updatedMessages);
    } catch (err) {
      console.error('Update error:', err);
      setError(err.message);
    }
  };

  const deleteMessage = async (messageId) => {
    if (!window.confirm('Bu mesajı silmək istədiyinizə əminsiniz?')) return;
    
    try {
      setError(null);
      
      const response = await fetch(apiUrl, {
        headers: {
          'X-Master-Key': apiKey,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Məlumat oxunarkən xəta baş verdi');

      const { record } = await response.json();
      const currentMessages = record?.Messages || [];

      const updatedMessages = currentMessages.filter(msg => msg.id !== messageId);

      const updateResponse = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'X-Master-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Messages: updatedMessages })
      });

      if (!updateResponse.ok) throw new Error('Məlumat silinərkən xəta baş verdi');

      setMessages(updatedMessages);
    } catch (err) {
      console.error('Delete error:', err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const filteredMessages = filter === 'all' 
    ? messages 
    : messages.filter(msg => msg.Status === filter);

  return (
    <div className={style.adminContainer}>
      <header className={style.header}>
        <h1 className={style.title}>Mesajlar İdarəetmə Paneli</h1>
        <div className={style.filterContainer}>
          <label htmlFor="status-filter" className={style.filterLabel}>Status:</label>
          <select
            id="status-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={style.filterSelect}
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <button onClick={handleLogout} className={style.logoutButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Çıxış
        </button>
      </header>

      <main className={style.mainContent}>
        {loading ? (
          <div className={style.loadingState}>
            <div className={style.spinner}></div>
            <p>Mesajlar yüklənir...</p>
          </div>
        ) : error ? (
          <div className={style.errorState}>
            <p>{error}</p>
            <button onClick={fetchMessages} className={style.retryButton}>Yenidən yoxla</button>
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className={style.emptyState}>
            <p>Heç bir mesaj tapılmadı</p>
          </div>
        ) : (
          <div className={style.messagesList}>
            {filteredMessages.map(message => (
              <article 
                key={message.id} 
                className={`${style.messageCard} ${style[getStatusClass(message.Status)]}`}
              >
                <div className={style.cardHeader}>
                  <h3 className={style.senderName}>{message.Name}</h3>
                  <div className={style.metaInfo}>
                    <span className={style.senderEmail}>{message.Email}</span>
                    <span className={style.messageDate}>
                      {new Date(message.CreatedAt).toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <div className={style.cardBody}>
                  <div className={style.contactInfo}>
                    <p><strong>Telefon:</strong> {message.Phone || 'Yoxdur'}</p>
                  </div>
                  
                  <div className={style.statusControl}>
                    <label htmlFor={`status-${message.id}`}>Status:</label>
                    <select
                      id={`status-${message.id}`}
                      value={message.Status}
                      onChange={(e) => updateMessageStatus(message.id, e.target.value)}
                      className={style.statusSelect}
                    >
                      {statusOptions.filter(opt => opt.value !== 'all').map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className={style.messageContent}>
                    <p><strong>Mesaj:</strong></p>
                    <div className={style.messageText}>
                      {message.YourMessage}
                    </div>
                  </div>
                </div>
                
                <div className={style.cardFooter}>
                  <button 
                    onClick={() => deleteMessage(message.id)}
                    className={style.deleteButton}
                    aria-label="Mesajı sil"
                  >
                    Sil
                  </button>
                </div>
              </article>
            ))}
          </div>

        )}
      </main>
    
    </div>
  );
};

export default AdminDashboard;