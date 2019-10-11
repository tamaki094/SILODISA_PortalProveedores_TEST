using DataAccesLayer;
using System.Collections.Generic;
using System.Linq;

namespace BussinesLayer
{
    public class UsuariosTb
    {
        Portal_ProveedoresEntities _ctx = new Portal_ProveedoresEntities();


        public List<Usuarios> GetPaginacionByDesc(int startIndex, int maxRows, string desc)
        {
            var result = (from oc in _ctx.Usuarios where oc.sNombre.Contains(desc) select oc).OrderBy(u => u.Id).Skip((startIndex - 1) * maxRows).Take(maxRows);
            return result.ToList();
        }

        public int GetPaginacionCount(string desc)
        {
            return _ctx.Usuarios.Count(u=>u.sNombre.Contains(desc));
        }
    }
}
